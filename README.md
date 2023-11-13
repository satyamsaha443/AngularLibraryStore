package dev.delta.stockbay.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "stockbay_client")
public class Client implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -874579554809953800L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String customer_name;
	String customer_phone;
	String customer_address;
	String customer_email;
	String status_id;
	String customer_description;

	@OneToMany(cascade = CascadeType.ALL)
	@JsonProperty(access = Access.WRITE_ONLY)
	private Set<Sell> sells = new HashSet<Sell>();

	@OneToMany(cascade = CascadeType.ALL)
	@JsonProperty(access = Access.WRITE_ONLY)
	private Set<Revenue> employees = new HashSet<Revenue>();

	public Client() {
		// TODO Auto-generated constructor stub
	}

	public Client(String customer_name, String customer_phone, String customer_address, String customer_email,
			String status_id, String customer_description) {
		super();
		this.customer_name = customer_name;
		this.customer_phone = customer_phone;
		this.customer_address = customer_address;
		this.customer_email = customer_email;
		this.status_id = status_id;
		this.customer_description = customer_description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getCustomer_phone() {
		return customer_phone;
	}

	public void setCustomer_phone(String customer_phone) {
		this.customer_phone = customer_phone;
	}

	public String getCustomer_address() {
		return customer_address;
	}

	public void setCustomer_address(String customer_address) {
		this.customer_address = customer_address;
	}

	public String getCustomer_email() {
		return customer_email;
	}

	public void setCustomer_email(String customer_email) {
		this.customer_email = customer_email;
	}

	public String getStatus_id() {
		return status_id;
	}

	public void setStatus_id(String status_id) {
		this.status_id = status_id;
	}

	public String getCustomer_description() {
		return customer_description;
	}

	public void setCustomer_description(String customer_description) {
		this.customer_description = customer_description;
	}

}



package dev.delta.stockbay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.delta.stockbay.entities.Client;
import dev.delta.stockbay.repositories.ClientRepository;

@Service
public class ClientService {
	@Autowired
	ClientRepository clientRepository;

	public Client saveOrUpdate(Client client) {

		return clientRepository.save(client);
	}

	public Iterable<Client> findAll() {
		return clientRepository.findAll();
	}

	public Client findById(Long id) {
		return clientRepository.getById(id);
	}

	public void delete(Long id) {
		Client client = findById(id);
		clientRepository.delete(client);
	}
}




package dev.delta.stockbay.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.delta.stockbay.entities.Client;
import dev.delta.stockbay.services.ClientService;

@RestController
@RequestMapping("/stockbay/client")
@CrossOrigin
public class ClientController {
	@Autowired
	ClientService clientService;

	@PostMapping("/create")
	public ResponseEntity<?> addPTToBoard(@Validated @RequestBody Client projectClient, BindingResult result) {

		if (result.hasErrors()) {
			Map<String, String> errorMap = new HashMap<String, String>();

			for (FieldError error : result.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}

		Client newPT = clientService.saveOrUpdate(projectClient);

		return new ResponseEntity<Client>(newPT, HttpStatus.CREATED);
	}

	@GetMapping("/all")
	public Iterable<Client> getAllClients() {
		return clientService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Client> getClientById(@PathVariable Long id) {
		Client client = clientService.findById(id);
		return new ResponseEntity<Client>(client, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteClient(@PathVariable Long id) {
		clientService.delete(id);
		return new ResponseEntity<String>("client was deleted", HttpStatus.OK);
	}
}
