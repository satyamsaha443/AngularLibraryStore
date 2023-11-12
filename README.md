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




package dev.delta.stockbay.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stockbay_income")
public class Income implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 4617049187057806541L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String employee_fname;
	String employee_email;
	String employee_phone;
	String employee_gender;
	String employee_nid;
	String status_id;
	String employee_birthday;
	String employee_address;
	String employee_salary;

	public Income() {
		// TODO Auto-generated constructor stub
	}

	public Income(String employee_fname, String employee_email, String employee_phone, String employee_gender,
			String employee_nid, String status_id, String employee_birthday, String employee_address,
			String employee_salary) {
		super();
		this.employee_fname = employee_fname;
		this.employee_email = employee_email;
		this.employee_phone = employee_phone;
		this.employee_gender = employee_gender;
		this.employee_nid = employee_nid;
		this.status_id = status_id;
		this.employee_birthday = employee_birthday;
		this.employee_address = employee_address;
		this.employee_salary = employee_salary;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmployee_fname() {
		return employee_fname;
	}

	public void setEmployee_fname(String employee_fname) {
		this.employee_fname = employee_fname;
	}

	public String getEmployee_email() {
		return employee_email;
	}

	public void setEmployee_email(String employee_email) {
		this.employee_email = employee_email;
	}

	public String getEmployee_phone() {
		return employee_phone;
	}

	public void setEmployee_phone(String employee_phone) {
		this.employee_phone = employee_phone;
	}

	public String getEmployee_gender() {
		return employee_gender;
	}

	public void setEmployee_gender(String employee_gender) {
		this.employee_gender = employee_gender;
	}

	public String getEmployee_nid() {
		return employee_nid;
	}

	public void setEmployee_nid(String employee_nid) {
		this.employee_nid = employee_nid;
	}

	public String getStatus_id() {
		return status_id;
	}

	public void setStatus_id(String status_id) {
		this.status_id = status_id;
	}

	public String getEmployee_birthday() {
		return employee_birthday;
	}

	public void setEmployee_birthday(String employee_birthday) {
		this.employee_birthday = employee_birthday;
	}

	public String getEmployee_address() {
		return employee_address;
	}

	public void setEmployee_address(String employee_address) {
		this.employee_address = employee_address;
	}

	public String getEmployee_salary() {
		return employee_salary;
	}

	public void setEmployee_salary(String employee_salary) {
		this.employee_salary = employee_salary;
	}

}



package dev.delta.stockbay.entities;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "stockbay_product")
public class Product implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -8698757387767929675L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String product_name;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "category_id")
	Category category_id;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "supplier_id")
	Supplier supplier_id;

	String product_unit;
	String product_alertquantity;
	String product_supplierPrice;
	String product_sellPrice;
	String product_code;
	String product_tax;
	String warehouse_id;
	String product_details;
	String product_detailsforinvoice;

	@OneToMany(cascade = CascadeType.ALL)
	@JsonProperty(access = Access.WRITE_ONLY)
	private Set<Buy> buys = new HashSet<Buy>();

	public Product() {
		// TODO Auto-generated constructor stub
	}

	public Product(String product_name, Category category_id, Supplier supplier_id, String product_unit,
			String product_alertquantity, String product_supplierPrice, String product_sellPrice, String product_code,
			String product_tax, String warehouse_id, String product_details, String product_detailsforinvoice) {
		super();
		this.product_name = product_name;
		this.category_id = category_id;
		this.supplier_id = supplier_id;
		this.product_unit = product_unit;
		this.product_alertquantity = product_alertquantity;
		this.product_supplierPrice = product_supplierPrice;
		this.product_sellPrice = product_sellPrice;
		this.product_code = product_code;
		this.product_tax = product_tax;
		this.warehouse_id = warehouse_id;
		this.product_details = product_details;
		this.product_detailsforinvoice = product_detailsforinvoice;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public Category getCategory_id() {
		return category_id;
	}

	public void setCategory_id(Category category_id) {
		this.category_id = category_id;
	}

	public Supplier getSupplier_id() {
		return supplier_id;
	}

	public void setSupplier_id(Supplier supplier_id) {
		this.supplier_id = supplier_id;
	}

	public String getProduct_unit() {
		return product_unit;
	}

	public void setProduct_unit(String product_unit) {
		this.product_unit = product_unit;
	}

	public String getProduct_alertquantity() {
		return product_alertquantity;
	}

	public void setProduct_alertquantity(String product_alertquantity) {
		this.product_alertquantity = product_alertquantity;
	}

	public String getProduct_supplierPrice() {
		return product_supplierPrice;
	}

	public void setProduct_supplierPrice(String product_supplierPrice) {
		this.product_supplierPrice = product_supplierPrice;
	}

	public String getProduct_sellPrice() {
		return product_sellPrice;
	}

	public void setProduct_sellPrice(String product_sellPrice) {
		this.product_sellPrice = product_sellPrice;
	}

	public String getProduct_code() {
		return product_code;
	}

	public void setProduct_code(String product_code) {
		this.product_code = product_code;
	}

	public String getProduct_tax() {
		return product_tax;
	}

	public void setProduct_tax(String product_tax) {
		this.product_tax = product_tax;
	}

	public String getWarehouse_id() {
		return warehouse_id;
	}

	public void setWarehouse_id(String warehouse_id) {
		this.warehouse_id = warehouse_id;
	}

	public String getProduct_details() {
		return product_details;
	}

	public void setProduct_details(String product_details) {
		this.product_details = product_details;
	}

	public String getProduct_detailsforinvoice() {
		return product_detailsforinvoice;
	}

	public void setProduct_detailsforinvoice(String product_detailsforinvoice) {
		this.product_detailsforinvoice = product_detailsforinvoice;
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
@Table(name = "stockbay_revenue")
public class Revenue implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 5934032785346540901L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String income_paymentDate;

	@ManyToOne(fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "customer_id")
	Client customer_id;

	String income_paymentType;
	String income_paymentAccount;
	String income_amount;
	String income_details;

	public Revenue() {
		// TODO Auto-generated constructor stub
	}

	public Revenue(String income_paymentDate, Client customer_id, String income_paymentType,
			String income_paymentAccount, String income_amount, String income_details) {
		super();
		this.income_paymentDate = income_paymentDate;
		this.customer_id = customer_id;
		this.income_paymentType = income_paymentType;
		this.income_paymentAccount = income_paymentAccount;
		this.income_amount = income_amount;
		this.income_details = income_details;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIncome_paymentDate() {
		return income_paymentDate;
	}

	public void setIncome_paymentDate(String income_paymentDate) {
		this.income_paymentDate = income_paymentDate;
	}

	public Client getCustomer_id() {
		return customer_id;
	}

	public void setCustomer_id(Client customer_id) {
		this.customer_id = customer_id;
	}

	public String getIncome_paymentType() {
		return income_paymentType;
	}

	public void setIncome_paymentType(String income_paymentType) {
		this.income_paymentType = income_paymentType;
	}

	public String getIncome_paymentAccount() {
		return income_paymentAccount;
	}

	public void setIncome_paymentAccount(String income_paymentAccount) {
		this.income_paymentAccount = income_paymentAccount;
	}

	public String getIncome_amount() {
		return income_amount;
	}

	public void setIncome_amount(String income_amount) {
		this.income_amount = income_amount;
	}

	public String getIncome_details() {
		return income_details;
	}

	public void setIncome_details(String income_details) {
		this.income_details = income_details;
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
@Table(name = "stockbay_supplier")
public class Supplier implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 3470927673791783361L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String supplier_name;
	String supplier_phone;
	String supplier_email;
	String supplier_company;
	String supplier_address;
	String status_id;
	String supplier_description;

	@OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true)
	@JsonProperty(access = Access.WRITE_ONLY)
	private Set<Buy> buys = new HashSet<Buy>();

	@OneToMany(cascade = CascadeType.DETACH, orphanRemoval = true, mappedBy = "supplier_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Set<Product> products = new HashSet<Product>();

	@OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true)
	@JsonProperty(access = Access.WRITE_ONLY)
	private Set<Expense> expenses = new HashSet<Expense>();

	public Supplier() {
		// TODO Auto-generated constructor stub
	}

	public Supplier(String supplier_name, String supplier_phone, String supplier_email, String supplier_company,
			String supplier_address, String status_id, String supplier_description) {
		super();
		this.supplier_name = supplier_name;
		this.supplier_phone = supplier_phone;
		this.supplier_email = supplier_email;
		this.supplier_company = supplier_company;
		this.supplier_address = supplier_address;
		this.status_id = status_id;
		this.supplier_description = supplier_description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSupplier_name() {
		return supplier_name;
	}

	public void setSupplier_name(String supplier_name) {
		this.supplier_name = supplier_name;
	}

	public String getSupplier_phone() {
		return supplier_phone;
	}

	public void setSupplier_phone(String supplier_phone) {
		this.supplier_phone = supplier_phone;
	}

	public String getSupplier_email() {
		return supplier_email;
	}

	public void setSupplier_email(String supplier_email) {
		this.supplier_email = supplier_email;
	}

	public String getSupplier_company() {
		return supplier_company;
	}

	public void setSupplier_company(String supplier_company) {
		this.supplier_company = supplier_company;
	}

	public String getSupplier_address() {
		return supplier_address;
	}

	public void setSupplier_address(String supplier_address) {
		this.supplier_address = supplier_address;
	}

	public String getStatus_id() {
		return status_id;
	}

	public void setStatus_id(String status_id) {
		this.status_id = status_id;
	}

	public String getSupplier_description() {
		return supplier_description;
	}

	public void setSupplier_description(String supplier_description) {
		this.supplier_description = supplier_description;
	}

}



package dev.delta.stockbay.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "stockbay_warehouse")
public class WareHouse {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String name;
	String status;
	String details;

	public WareHouse() {
		// TODO Auto-generated constructor stub
	}

	public WareHouse(String name, String status, String details) {
		super();
		this.name = name;
		this.status = status;
		this.details = details;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

}
