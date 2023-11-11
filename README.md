import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase  , AngularFireList , AngularFireObject } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { resolve } from 'url';

@Injectable()
export class AuthService {
  
  currentUser:AngularFireObject<User>;
  currentUsers:AngularFireList<User>;

  constructor(public afAuth: AngularFireAuth , 
              public router:Router,
              public flashMessageService: FlashMessagesService,
              public af: AngularFireDatabase
            ) {  
                //  this.currentUsers.snapshotChanges().map(changes => {
                //   return changes.map(c => ({ id: c.payload.key , ...c.payload.val()
                //   }));
                // }).subscribe(val => {
                //   console.log(val);
                // });
             }

  login(email: string , password: string){
    return new Promise((resolve , reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email,password)
      .then(result => {
        resolve(result)
      }, err=> reject(err));
    });
  }

  logout(showDefaultMessage:boolean = true){
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    if(showDefaultMessage)
      this.flashMessageService.show("You Are Logged Out" , {cssClass: "custom-success-alert" , timeout:4000});
  }

  registerUser(data:User , useremail:string , password:string){
    this.currentUsers = this.af.list('/users') as AngularFireList<User>;

    return new Promise((resolve , reject) => {
      this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(useremail , password)
      .then(userData =>{
        resolve(userData);
        this.currentUsers.set(userData.user.uid  , data)       
      }  , err => reject(err) );
    })
  }

  getCurrentUserDetail(){
    this.currentUser = this.af.object('/users/'+ this.afAuth.auth.currentUser.uid) as AngularFireObject<User>;
    return this.currentUser.snapshotChanges().map(c => ({
      id: c.payload.key , ...c.payload.val()
    }));
  }
 
  listUsers(){
    this.currentUsers = this.af.list('/users') as AngularFireList<User>;
    return this.currentUser.snapshotChanges().map(c => ({
      id: c.payload.key , ...c.payload.val()
    })); 
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

package com.Jwt.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

////for Angular Client (withCredentials)
@CrossOrigin(origins = "http://localhost:62437", maxAge = 3600, allowCredentials="true")
//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
  @GetMapping("/all")
  public String allAccess() {
    return "Public Content.";
  }

  @GetMapping("/user")
  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  public String userAccess() {
    return "User Content.";
   
  }

  @GetMapping("/mod")
 @PreAuthorize("hasRole('MODERATOR')")
  public String moderatorAccess() {
    return "Moderator Board.";
  }

  @GetMapping("/admin")
 @PreAuthorize("hasRole('ADMIN')")
  public String adminAccess() {
    return "Admin Board.";
  }
}
