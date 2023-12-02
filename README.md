package com.Main.models;


import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "User")

public class User implements UserDetails {

//    private User user;
//
//    public User(User user) {
//        super();
//        this.user = user;
//    }

    @Id
    private String userId;
    private String userName;
    private String email;
    private String password;
    private String role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
//        SimpleGrantedAuthority simpleGrantedAuthority=new SimpleGrantedAuthority(user.getRole());
//
//        return List.of(simpleGrantedAuthority);
//        return role.getAuthorities();
        return null;
    }
//@Override
//public Collection<? extends GrantedAuthority> getAuthorities() {
//    return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + this.role));
//}

//    private String getRole() {
//        return null;
//    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
    
    


}
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.userdetails.DaoAuthenticationConfigurer;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.Main.Security.JwtAuthenticationEntryPoint;
import com.Main.Security.JwtAuthenticationFilter;

import java.util.Arrays;


@Configuration
@EnableWebSecurity
public class SecurityConfig  {
    @Autowired
    private JwtAuthenticationEntryPoint point;
    @Autowired
    private JwtAuthenticationFilter filter;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;



    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http.csrf(csrf -> csrf.disable())
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(auth -> auth.requestMatchers("/home/*").authenticated()
                        .requestMatchers("/auth/login").permitAll()
                        .requestMatchers("/auth/create-user").permitAll()
                        .requestMatchers("/api/buys/all").permitAll()
                        .requestMatchers("/api/buys/create").permitAll()
                        .requestMatchers("/api/buys/delete{id}").permitAll()
                        .requestMatchers("/api/suppliers/all").permitAll()
                        .requestMatchers("/api/suppliers/create").permitAll()
                        .requestMatchers("/api/suppliers/delete{id}").permitAll()
                        .requestMatchers("/api/clients/all").permitAll()
                        .requestMatchers("/api/clients/create").permitAll()
                        .requestMatchers("/api/clients/delete{id}").permitAll()
                        .requestMatchers("/api/expenses/all").permitAll()
                        .requestMatchers("/api/expenses/create").permitAll()
                        .requestMatchers("/api/expenses/delete{id}").permitAll()
                        .requestMatchers("/api/revenues/all").permitAll()
                        .requestMatchers("/api/revenues/create").permitAll()
                        .requestMatchers("/api/revenues/delete{id}").permitAll()
                        .requestMatchers("/api/warehouses/all").permitAll()
                        .requestMatchers("/api/warehouses/create").permitAll()
                        .requestMatchers("/api/warehouses/delete{id}").permitAll()
                        .requestMatchers("/api/sells/all").permitAll()
                        .requestMatchers("/api/sells/create").permitAll()
                        .requestMatchers("/api/sells/delete{id}").permitAll()
                        .requestMatchers("/api/categories/all").permitAll()
                        .requestMatchers("/api/categories/create").permitAll()
                        .requestMatchers("/api/categories/delete{id}").permitAll()
                        .requestMatchers("/api/configurations/all").permitAll()
                        .requestMatchers("/api/products/all").permitAll()
                        .requestMatchers("/api/products/create").permitAll()
                        .requestMatchers("/api/products/delete{id}").permitAll()

                        
                        
//                        .requestMatchers("/api/v1/invoices/{id}").permitAll()
//                        .requestMatchers("/api/v1/invoices/{id}").permitAll()
//                        .requestMatchers("/api/b1/invoices/**").hasAnyRole(ADMIN.name(),USER.name())
                        .anyRequest().authenticated())
                .exceptionHandling(ex -> ex.authenticationEntryPoint(point))
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        http.addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }


    @Bean
    public DaoAuthenticationProvider doDaoAuthenticationProvider() {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder);
        return daoAuthenticationProvider;
    }


    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST","DELETE","PUT"));
        configuration.setAllowedHeaders(Arrays.asList("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}

package com.Main.Services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Main.Repository.UserRepository;
import com.Main.models.User;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepository userRepo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("djkhfdfklhfdgkl");
        System.out.println(username);
        User user=userRepo.findByEmail(username).orElseThrow(()->new RuntimeException("User not found"));
        return user;
    }
}

package com.Main.Controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import com.Main.Security.JwtHelper;
import com.Main.Services.*;

import com.Main.models.JwtRequest;
import com.Main.models.JwtResponse;
import com.Main.models.User;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200",
            methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE},
            allowedHeaders ="*"
            )
public class AuthController
{
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager manager;


    @Autowired
    private JwtHelper helper;

    @Autowired
    private UserService userService;

    private Logger logger = LoggerFactory.getLogger(AuthController.class);


    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) {

        this.doAuthenticate(request.getEmail(), request.getPassword());


        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        String token = this.helper.generateToken(userDetails);

        JwtResponse response = JwtResponse.builder()
                .jwtToken(token)
                .username(userDetails.getUsername()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) {

        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {
            manager.authenticate(authentication);


        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password  !!");
        }

    }

    @ExceptionHandler(BadCredentialsException.class)
    public String exceptionHandler(){
        return "Credentials Invalid!!";

    }


    @PostMapping("/create-user")
    public User createUser(@RequestBody User user){
//        user.setRole(role);
        return userService.createUser(user);
    }



}
