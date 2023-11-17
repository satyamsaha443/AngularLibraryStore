package dev.delta.stockbay.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "stockbay_sell")
public class Sell implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -4497992680923909136L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "customer_id")
	Client customer_id;

	String sale_date;
	String sale_status;
	String sale_invoiceNo;

	public Sell() {
		// TODO Auto-generated constructor stub
	}

	public Sell(Client customer_id, String sale_date, String sale_status, String sale_invoiceNo) {
		super();
		this.customer_id = customer_id;
		this.sale_date = sale_date;
		this.sale_status = sale_status;
		this.sale_invoiceNo = sale_invoiceNo;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Client getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(Client customer_id) {
		this.customer_id = customer_id;
	}

	public String getSale_date() {
		return sale_date;
	}

	public void setSale_date(String sale_date) {
		this.sale_date = sale_date;
	}

	public String getSale_status() {
		return sale_status;
	}

	public void setSale_status(String sale_status) {
		this.sale_status = sale_status;
	}

	public String getSale_invoiceNo() {
		return sale_invoiceNo;
	}

	public void setSale_invoiceNo(String sale_invoiceNo) {
		this.sale_invoiceNo = sale_invoiceNo;
	}

}


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
