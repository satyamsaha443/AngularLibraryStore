package com.Inv.models;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModelProperty;

@Document
public class Revenue implements Serializable {
    /**
     * 
     */
    private static final long serialVersionUID = 5934032785346540901L;
    
    @Id
    @ApiModelProperty(notes = "The database generated revenue ID")
    private String id;
    
    @ApiModelProperty(notes = "The date of the payment")
    private String income_paymentDate;

    @DBRef
    @ApiModelProperty(notes = "The customer who made the payment")
    private Client customer;

    @ApiModelProperty(notes = "The payment type")
    private String income_paymentType;
    
    @ApiModelProperty(notes = "The payment account")
    private String income_paymentAccount;
    
    @ApiModelProperty(notes = "The amount of the payment")
    private String income_amount;
    
    @ApiModelProperty(notes = "Details about the payment")
    private String income_details;

    public Revenue() {
        // TODO Auto-generated constructor stub
    }

    public Revenue(String income_paymentDate, Client customer, String income_paymentType,
                   String income_paymentAccount, String income_amount, String income_details) {
        super();
        this.income_paymentDate = income_paymentDate;
        this.customer = customer;
        this.income_paymentType = income_paymentType;
        this.income_paymentAccount = income_paymentAccount;
        this.income_amount = income_amount;
        this.income_details = income_details;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIncome_paymentDate() {
        return income_paymentDate;
    }

    public void setIncome_paymentDate(String income_paymentDate) {
        this.income_paymentDate = income_paymentDate;
    }

    public Client getCustomer() {
        return customer;
    }

    public void setCustomer(Client customer) {
        this.customer = customer;
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



package com.Inv.models;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "inv_sell")
public class Sell implements Serializable {
    
    private static final long serialVersionUID = -4497992680923909136L;
    
    @Id
    private String id;

    @DBRef
    private Client customer_id;

    private String sale_date;
    private String sale_status;
    private String sale_invoiceNo;

    public Sell() {

    }

    public Sell(Client customer_id, String sale_date, String sale_status, String sale_invoiceNo) {
        this.customer_id = customer_id;
        this.sale_date = sale_date;
        this.sale_status = sale_status;
        this.sale_invoiceNo = sale_invoiceNo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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



package com.Inv.models;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Document(collection = "inv_supplier")
public class Supplier {
    @Id
    private String id;

    @Field(name = "supplier_name")
    private String supplierName;

    @Field(name = "supplier_phone")
    private String supplierPhone;

    @Field(name = "supplier_email")
    private String supplierEmail;

    @Field(name = "supplier_company")
    private String supplierCompany;

    @Field(name = "supplier_address")
    private String supplierAddress;

    @Field(name = "status_id")
    private String statusId;

    @Field(name = "supplier_description")
    private String supplierDescription;

    @Field(name = "buys")
    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Buy> buys = new HashSet<>();

    @Field(name = "products")
    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Products> products = new HashSet<>();

    @Field(name = "expenses")
    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Expense> expenses = new HashSet<>();

    public Supplier() {}

    public Supplier(
        String supplierName,
        String supplierPhone,
        String supplierEmail,
        String supplierCompany,
        String supplierAddress,
        String statusId,
        String supplierDescription
    ) {
        this.supplierName = supplierName;
        this.supplierPhone = supplierPhone;
        this.supplierEmail = supplierEmail;
        this.supplierCompany = supplierCompany;
        this.supplierAddress = supplierAddress;
        this.statusId = statusId;
        this.supplierDescription = supplierDescription;
    }

    // getters and setters

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getSupplierName() {
        return supplierName;
    }
    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    public String getSupplierPhone() {
        return supplierPhone;
    }
    public void setSupplierPhone(String supplierPhone) {
        this.supplierPhone = supplierPhone;
    }

    public String getSupplierEmail() {
        return supplierEmail;
    }
    public void setSupplierEmail(String supplierEmail) {
        this.supplierEmail = supplierEmail;
    }

    public String getSupplierCompany() {
        return supplierCompany;
    }
    public void setSupplierCompany(String supplierCompany) {
        this.supplierCompany = supplierCompany;
    }

    public String getSupplierAddress() {
        return supplierAddress;
    }
    public void setSupplierAddress(String supplierAddress) {
        this.supplierAddress = supplierAddress;
    }

    public String getStatusId() {
        return statusId;
    }
    public void setStatusId(String statusId) {
        this.statusId = statusId;
    }

    public String getSupplierDescription() {
        return supplierDescription;
    }
    public void setSupplierDescription(String supplierDescription) {
        this.supplierDescription = supplierDescription;
    }

    public Set<Buy> getBuys() {
        return buys;
    }
    public void setBuys(Set<Buy> buys) {
        this.buys = buys;
    }

    public Set<Products> getProducts() {
        return products;
    }
    public void setProducts(Set<Products> products) {
        this.products = products;
    }

    public Set<Expense> getExpenses() {
        return expenses;
    }
    public void setExpenses(Set<Expense> expenses) {
        this.expenses = expenses;
    }
}



package com.Inv.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class WareHouse {
    @Id
    private String id;
    
    private String name;
    private String status;
    private String details;

    public WareHouse() {
        // TODO Auto-generated constructor stub
    }

    public WareHouse(String name, String status, String details) {
        super();
        this.name = name;
        this.status = status;
        this.details = details;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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
