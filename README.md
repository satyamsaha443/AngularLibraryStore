package dev.delta.stockbay.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordConfig {

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(10);
	}
}


package dev.delta.stockbay.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	PasswordEncoder passwordEncoder;

	@Autowired
	public WebSecurityConfig(PasswordEncoder passwordEncoder) {
		super();
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable().

				authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated()
				.and().httpBasic();
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

package dev.delta.stockbay;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import dev.delta.stockbay.datas.InsertDataDB;
import dev.delta.stockbay.entities.Category;
import dev.delta.stockbay.repositories.CategoryRepository;
import dev.delta.stockbay.services.CategoryService;

@SpringBootApplication()
@ComponentScan({ "dev.delta.stockbay.security", "dev.delta.stockbay.controllers", "dev.delta.stockbay.datas",
		"dev.delta.stockbay.services" }) // to scan repository files
@EntityScan("dev.delta.stockbay.entities")
@EnableJpaRepositories("dev.delta.stockbay.repositories")
public class SpringbootStockBayApplication implements CommandLineRunner {

	@Autowired
	InsertDataDB dataDB;

	public static void main(String[] args) {
		SpringApplication.run(SpringbootStockBayApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		dataDB.populate();

	}
}
