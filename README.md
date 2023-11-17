package com.Main.Security;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.Main.Services.CustomUserDetailsService;


@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfiguration {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeRequests()
            .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
            .anyRequest().authenticated()
            .and()
            .httpBasic();
    }

 
	@Override
	@Bean
	protected UserDetailsService userDetailsService() {
		UserDetails user1 = User.builder().username("emp").password(passwordEncoder.encode("123")).roles("employee")
				.build();

		UserDetails user2 = User.builder().username("admin").password(passwordEncoder.encode("admin")).roles("admin")
				.build();

		return new InMemoryUserDetailsManager(user1, user2);

	}

}

APPLICATION FAILED TO START
***************************

Description:

The bean 'delegatingApplicationListener', defined in class path resource [com/Main/Security/WebSecurityConfig.class], could not be registered. A bean with that name has already been defined in class path resource [org/springframework/security/config/annotation/web/configuration/WebSecurityConfiguration.class] and overriding is disabled.

Action:

Consider renaming one of the beans or enabling overriding by setting spring.main.allow-bean-definition-overriding=true

