package com.Inv.models;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Configuration implements Serializable {
    /**
     * 
     */
    private static final long serialVersionUID = 6288598345366900275L;
    
    @Id
    private String id;
    
    private String name;
    private String email;
    private String address;
    private String language;
    private String currency;

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




package com.Inv.models;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "inv_employee")
public class Employee {
    @Id
    private String id;

    @Field(name = "employee_fname")
    private String name;

    @Field(name = "employee_email")
    private String email;

    @Field(name = "employee_phone")
    private String phone;

    @Field(name = "employee_address")
    private String address;

    @Field(name = "status_id")
    private String status;

    public Employee() {}

    public Employee(String name, String email, String phone, String address, String status) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.status = status;
    }

    // getters and setters

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

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
}




package com.Inv.models;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "inv_expense")
public class Expense implements Serializable {
    private static final long serialVersionUID = -7662008307295661236L;

    @Id
    private String id;

    @Field(name = "expense_paymentDate")
    private String expensePaymentDate;

    @DBRef
    @Field(name = "supplier_id")
    private Supplier supplier;

    @Field(name = "expense_paymentType")
    private String expensePaymentType;

    @Field(name = "expense_paymentAccount")
    private String expensePaymentAccount;

    @Field(name = "expense_amount")
    private String expenseAmount;

    @Field(name = "expense_details")
    private String expenseDetails;

    public Expense() {}

    public Expense(
        String expensePaymentDate,
        Supplier supplier,
        String expensePaymentType,
        String expensePaymentAccount,
        String expenseAmount,
        String expenseDetails
    ) {
        this.expensePaymentDate = expensePaymentDate;
        this.supplier = supplier;
        this.expensePaymentType = expensePaymentType;
        this.expensePaymentAccount = expensePaymentAccount;
        this.expenseAmount = expenseAmount;
        this.expenseDetails = expenseDetails;
    }

    // getters and setters

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getExpensePaymentDate() {
        return expensePaymentDate;
    }
    public void setExpensePaymentDate(String expensePaymentDate) {
        this.expensePaymentDate = expensePaymentDate;
    }

    public Supplier getSupplier() {
        return supplier;
    }
    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public String getExpensePaymentType() {
        return expensePaymentType;
    }
    public void setExpensePaymentType(String expensePaymentType) {
        this.expensePaymentType = expensePaymentType;
    }

    public String getExpensePaymentAccount() {
        return expensePaymentAccount;
    }
    public void setExpensePaymentAccount(String expensePaymentAccount) {
        this.expensePaymentAccount = expensePaymentAccount;
    }

    public String getExpenseAmount() {
        return expenseAmount;
    }
    public void setExpenseAmount(String expenseAmount) {
        this.expenseAmount = expenseAmount;
    }	

    public String getExpenseDetails() {
        return expenseDetails;
    }
    public void setExpenseDetails(String expenseDetails) {
        this.expenseDetails = expenseDetails;
    }
}



package com.Inv.models;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Income implements Serializable {
    /**
     * 
     */
    private static final long serialVersionUID = 4617049187057806541L;
    
    @Id
    private String id;
    
    private String employee_fname;
    private String employee_email;
    private String employee_phone;
    private String employee_gender;
    private String employee_nid;
    private String status_id;
    private String employee_birthday;
    private String employee_address;
    private String employee_salary;

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

    public String getId() {
        return id;
    }

    public void setId(String id) {
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


package com.Inv.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "inv_products")
public class Products implements Serializable {

    private static final long serialVersionUID = -8698757387767929675L;

    @Id
    private String id;
    private String productName;

    @DBRef
    private Category category;

    @DBRef
    private Supplier supplier;

    private String productUnit;
    private String productAlertQuantity;
    private String productSupplierPrice;
    private String productSellPrice;
    private String productCode;
    private String productTax;
    private String warehouseId;
    private String productDetails;
    private String productDetailsForInvoice;

    private Set<Buy> buys = new HashSet<>();

    public Products() {

    }

    public Products(String productName, Category category, Supplier supplier, String productUnit,
                   String productAlertQuantity, String productSupplierPrice, String productSellPrice, String productCode,
                   String productTax, String warehouseId, String productDetails, String productDetailsForInvoice) {
        this.productName = productName;
        this.category = category;
        this.supplier = supplier;
        this.productUnit = productUnit;
        this.productAlertQuantity = productAlertQuantity;
        this.productSupplierPrice = productSupplierPrice;
        this.productSellPrice = productSellPrice;
        this.productCode = productCode;
        this.productTax = productTax;
        this.warehouseId = warehouseId;
        this.productDetails = productDetails;
        this.productDetailsForInvoice = productDetailsForInvoice;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public String getProductUnit() {
        return productUnit;
    }

    public void setProductUnit(String productUnit) {
        this.productUnit = productUnit;
    }

    public String getProductAlertQuantity() {
        return productAlertQuantity;
    }

    public void setProductAlertQuantity(String productAlertQuantity) {
        this.productAlertQuantity = productAlertQuantity;
    }

    public String getProductSupplierPrice() {
        return productSupplierPrice;
    }

    public void setProductSupplierPrice(String productSupplierPrice) {
        this.productSupplierPrice = productSupplierPrice;
    }

    public String getProductSellPrice() {
        return productSellPrice;
    }

    public void setProductSellPrice(String productSellPrice) {
        this.productSellPrice = productSellPrice;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getProductTax() {
        return productTax;
    }

    public void setProductTax(String productTax) {
        this.productTax = productTax;
    }

    public String getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(String warehouseId) {
        this.warehouseId = warehouseId;
    }

    public String getProductDetails() {
        return productDetails;
    }

    public void setProductDetails(String productDetails) {
        this.productDetails = productDetails;
    }

    public String getProductDetailsForInvoice() {
        return productDetailsForInvoice;
    }

    public void setProductDetailsForInvoice(String productDetailsForInvoice) {
        this.productDetailsForInvoice = productDetailsForInvoice;
    }

    public Set<Buy> getBuys() {
        return buys;
    }

    public void setBuys(Set<Buy> buys) {
        this.buys = buys;
    }
}
