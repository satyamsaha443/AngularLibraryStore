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
@Table(name = "stockbay_buy")
public class Buy implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 105253940174394025L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "supplier_id")
	Supplier supplier;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "product_id")
	Product product;

	String purchase_date;
	String purchase_invoiceNo;
	String purchase_status;

	public Buy() {
		// TODO Auto-generated constructor stub
	}

	public Buy(Supplier supplier, Product product_id, String purchase_date, String purchase_invoiceNo,
			String purchase_status) {
		super();
		this.supplier = supplier;
		this.product = product_id;
		this.purchase_date = purchase_date;
		this.purchase_invoiceNo = purchase_invoiceNo;
		this.purchase_status = purchase_status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	public Product getProduct_id() {
		return product;
	}

	public void setProduct_id(Product product_id) {
		this.product = product_id;
	}

	public String getPurchase_date() {
		return purchase_date;
	}

	public void setPurchase_date(String purchase_date) {
		this.purchase_date = purchase_date;
	}

	public String getPurchase_invoiceNo() {
		return purchase_invoiceNo;
	}

	public void setPurchase_invoiceNo(String purchase_invoiceNo) {
		this.purchase_invoiceNo = purchase_invoiceNo;
	}

	public String getPurchase_status() {
		return purchase_status;
	}

	public void setPurchase_status(String purchase_status) {
		this.purchase_status = purchase_status;
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

import org.hibernate.annotations.Cascade;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "stockbay_category")
public class Category implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -3942285530464977887L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String category_name;
	String status_id;
	String category_details;

	@OneToMany(cascade = CascadeType.DETACH, orphanRemoval = true)
	@JsonProperty(access = Access.WRITE_ONLY)

	private Set<Buy> products = new HashSet<Buy>();

	public Category() {
		// TODO Auto-generated constructor stub
	}

	public Category(String category_name, String status_id, String category_details) {
		super();
		this.category_name = category_name;
		this.status_id = status_id;
		this.category_details = category_details;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}

	public String getStatus_id() {
		return status_id;
	}

	public void setStatus_id(String status_id) {
		this.status_id = status_id;
	}

	public String getCategory_details() {
		return category_details;
	}

	public void setCategory_details(String category_details) {
		this.category_details = category_details;
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




package dev.delta.stockbay.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stockbay_configuration")
public class Configuration implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 6288598345366900275L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String name;
	String email;
	String address;
	String language;
	String currency;

	public Configuration() {
		// TODO Auto-generated constructor stub
	}

	public Configuration(String name, String email, String address, String language, String currency) {
		super();
		this.name = name;
		this.email = email;
		this.address = address;
		this.language = language;
		this.currency = currency;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

}




package dev.delta.stockbay.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stockbay_employee")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String employee_fname;
	String employee_email;
	String employee_phone;
	String employee_address;
	String status_id;

	public Employee() {
		// TODO Auto-generated constructor stub
	}

	public Employee(String name, String email, String phone, String address, String status) {
		super();
		this.employee_fname = name;
		this.employee_email = email;
		this.employee_phone = phone;
		this.employee_address = address;
		this.status_id = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return employee_fname;
	}

	public void setName(String name) {
		this.employee_fname = name;
	}

	public String getEmail() {
		return employee_email;
	}

	public void setEmail(String email) {
		this.employee_email = email;
	}

	public String getPhone() {
		return employee_phone;
	}

	public void setPhone(String phone) {
		this.employee_phone = phone;
	}

	public String getAddress() {
		return employee_address;
	}

	public void setAddress(String address) {
		this.employee_address = address;
	}

	public String getStatus() {
		return status_id;
	}

	public void setStatus(String status) {
		this.status_id = status;
	}

}



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
@Table(name = "stockbay_expense")
public class Expense implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -7662008307295661236L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String expense_paymentDate;
	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "supplier_id")
	Supplier supplier_id;
	String expense_paymentType;
	String expense_paymentAccount;
	String expense_amount;
	String expense_details;

	public Expense() {
		// TODO Auto-generated constructor stub
	}

	public Expense(String expense_paymentDate, Supplier supplier_id, String expense_paymentType,
			String expense_paymentAccount, String expense_amount, String expense_details) {
		super();
		this.expense_paymentDate = expense_paymentDate;
		this.supplier_id = supplier_id;
		this.expense_paymentType = expense_paymentType;
		this.expense_paymentAccount = expense_paymentAccount;
		this.expense_amount = expense_amount;
		this.expense_details = expense_details;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getExpense_paymentDate() {
		return expense_paymentDate;
	}

	public void setExpense_paymentDate(String expense_paymentDate) {
		this.expense_paymentDate = expense_paymentDate;
	}

	public Supplier getSupplier_id() {
		return supplier_id;
	}

	public void setSupplier_id(Supplier supplier_id) {
		this.supplier_id = supplier_id;
	}

	public String getExpense_paymentType() {
		return expense_paymentType;
	}

	public void setExpense_paymentType(String expense_paymentType) {
		this.expense_paymentType = expense_paymentType;
	}

	public String getExpense_paymentAccount() {
		return expense_paymentAccount;
	}

	public void setExpense_paymentAccount(String expense_paymentAccount) {
		this.expense_paymentAccount = expense_paymentAccount;
	}

	public String getExpense_amount() {
		return expense_amount;
	}

	public void setExpense_amount(String expense_amount) {
		this.expense_amount = expense_amount;
	}

	public String getExpense_details() {
		return expense_details;
	}

	public void setExpense_details(String expense_details) {
		this.expense_details = expense_details;
	}

}
