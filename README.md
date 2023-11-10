<div class="form-container">
    <div class="form login">
        <form [formGroup]="frm" (ngSubmit)="onPost()">
        <div class="title">
           Login
        </div>
        <div class="input-container"> 
           <input type="text" formControlName="username" name="username" class="input" placeholder="Username">
       </div>
       <div class="msg error" *ngIf="f['username'].invalid && (f['username'].dirty || f['username'].touched)">
        <span *ngIf="f['username'].errors?.['required']">
            Username is required  
      </span>
     </div>
    
       <div class="input-container"> 
           <input type="password" formControlName="password" name="password" class="input" placeholder="Password">
       </div>
       <div class="msg error" *ngIf="f['password'].invalid && (f['password'].dirty || f['password'].touched)">
        <span *ngIf="f['password'].errors?.['required']">
            Password is required  
      </span>
      </div>
    
       
       <button type="submit" id="btnSubmit">Login</button>
       <div class="msg light" *ngIf="status">
           {{status.message}}
       </div>
         <a routerLink="/signup" class="link">Not a member? Signup here</a>
        </form>
    </div>
    </div>


    import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from 'src/app/models/status';
import { AuthService } from 'src/app/services/auth.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  frm!:FormGroup;
  status!:Status;
  
    get f(){
    return this.frm.controls;  // needed for validation in html file 
  }



  constructor(private signupService:SignupService, private fb:FormBuilder,
    private authService:AuthService, private router:Router
    ) { }

   onPost(){
    this.status = {statusCode:0,message:"wait...."};

    this.signupService.login(this.frm.value).subscribe({
      next: (res)=>{
        // save username, accesstoken and refresh token into localStorage
        this.authService.addAccessToken(res.token);
        this.authService.addRefreshToken(res.refreshToken);
        this.authService.addUsername(res.username);
        this.status.statusCode=res.statusCode;
        this.status.message=res.message;
        if(res.statusCode==1){
        this.router.navigate(['./dashboard']);
        }

      },
      error: (err)=>{
        console.log(err);
        this.status.statusCode=0;
        this.status.message="some error on server side";
      }
    })
     
 
  }

  ngOnInit(): void {
    this.frm= this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required]
    })
    if(this.authService.isLoggedIn()){
      this.router.navigate(['./dashboard']);
    }
  }

}

export interface LoginForm {
    username: string;
    password: string;
  }


  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Status } from '../models/status';
import { LoginForm, LoginResponseModel, SignupForm } from '../models/login-response';
import { ChangePasswrd } from '../models/change-password';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private baseUrl = environment.baseUrl+'/auth';
  constructor(private http:HttpClient) { 

  }

  login(model:LoginForm){
  return this.http.post<LoginResponseModel>(this.baseUrl+'/signin',model);
  }

  signup(model:SignupForm){
     return this.http.post<Status>(this.baseUrl+'/signup',model);
  }

  chagePassword(model:ChangePasswrd){
    return this.http.post<Status>(this.baseUrl+'/chagepassword',model);
    }

}



package com.Jwt.controllers;



import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Jwt.models.ERole;
import com.Jwt.models.Role;
import com.Jwt.models.User;
import com.Jwt.repository.RoleRepository;
import com.Jwt.repository.UserRepository;
import com.Jwt.request.LoginRequest;
import com.Jwt.request.SignupRequest;
import com.Jwt.response.MessageResponse;
import com.Jwt.response.UserInfoResponse;
import com.Jwt.security.jwt.JwtUtils;
import com.Jwt.security.services.UserDetailsImpl;


//
@CrossOrigin(origins = "http://localhost:62437", maxAge = 3600, allowCredentials="true")

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository;

  @Autowired
  RoleRepository roleRepository;

  @Autowired
  PasswordEncoder encoder;

  @Autowired
  JwtUtils jwtUtils;

  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

    SecurityContextHolder.getContext().setAuthentication(authentication);

    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

    ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);

    List<String> roles = userDetails.getAuthorities().stream()
        .map(item -> item.getAuthority())
        .collect(Collectors.toList());

    return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
        .body(new UserInfoResponse(userDetails.getId(),
                                   userDetails.getUsername(),
                                   userDetails.getEmail(),
                                   roles));
  }

  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Username is already taken!"));
    }

    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity
          .badRequest()
          .body(new MessageResponse("Error: Email is already in use!"));
    }

    // Create new user's account
    User user = new User(signUpRequest.getUsername(), 
                         signUpRequest.getEmail(),
                         encoder.encode(signUpRequest.getPassword()));

    Set<String> strRoles = signUpRequest.getRoles();
    Set<Role> roles = new HashSet<>();

    if (strRoles == null) {
      Role userRole = roleRepository.findByName(ERole.ROLE_USER)
          .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
      roles.add(userRole);
    } else {
      strRoles.forEach(role -> {
        switch (role) {
        case "admin":
          Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(adminRole);

          break;
        case "mod":
          Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(modRole);

          break;
        default:
          Role userRole = roleRepository.findByName(ERole.ROLE_USER)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
          roles.add(userRole);
        }
      });
    }

    user.setRoles(roles);
    userRepository.save(user);

    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }
}
