package dev.delta.stockbay.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.io.Serializable;

@Document(collection = "stockbay_buy")
public class Buy implements Serializable {
    private static final long serialVersionUID = 105253940174394025L;

    @Id
    private String id; // MongoDB typically uses String for IDs

    @DBRef(lazy = true)
    private Supplier supplier;

    @DBRef(lazy = true)
    private Product product;

    private String purchase_date;
    private String purchase_invoiceNo;
    private String purchase_status;

    // Constructors, getters, and setters...
}






package dev.delta.stockbay.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "stockbay_category")
public class Category implements Serializable {
    private static final long serialVersionUID = -3942285530464977887L;

    @Id
    private String id; // Use String for MongoDB's ObjectId
    private String category_name;
    private String status_id;
    private String category_details;

    // MongoDB doesn't support direct entity relationships like JPA, so adjust as needed
    private Set<String> productIds = new HashSet<>(); // Assuming you store product IDs

    // Constructors, getters, and setters...
}



package dev.delta.stockbay.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "stockbay_client")
public class Client implements Serializable {
    private static final long serialVersionUID = -874579554809953800L;

    @Id
    private String id; // Use String for MongoDB's ObjectId
    private String customer_name;
    private String customer_phone;
    private String customer_address;
    private String customer_email;
    private String status_id;
    private String customer_description;

    // Adjust relationships for MongoDB
    private Set<String> sellIds = new HashSet<>(); // Assuming you store sell IDs
    private Set<String> revenueIds = new HashSet<>(); // Assuming you store revenue IDs

    // Constructors, getters, and setters...
}



package dev.delta.stockbay.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;

@Document(collection = "stockbay_configuration")
public class Configuration implements Serializable {
    private static final long serialVersionUID = 6288598345366900275L;

    @Id
    private String id; // MongoDB uses String for ObjectId
    private String name;
    private String email;
    private String address;
    private String language;
    private String currency;

    // Constructors, getters, and setters...
}


package dev.delta.stockbay.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "stockbay_employee")
public class Employee {
    @Id
    private String id; // MongoDB uses String for ObjectId
    private String employee_fname;
    private String employee_email;
    private String employee_phone;
    private String employee_address;
    private String status_id;

    // Constructors, getters, and setters...
}


package dev.delta.stockbay.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;
import java.io.Serializable;

@Document(collection = "stockbay_expense")
public class Expense implements Serializable {
    private static final long serialVersionUID = -7662008307295661236L;

    @Id
    private String id; // MongoDB uses String for ObjectId
    private String expense_paymentDate;

    @DBRef(lazy = true)
    private Supplier supplier_id; // Adjust as needed for MongoDB

    private String expense_paymentType;
    private String expense_paymentAccount;
    private String expense_amount;
    private String expense_details;

    // Constructors, getters, and setters...
}


package dev.delta.stockbay.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;

@Document(collection = "stockbay_income")
public class Income implements Serializable {
    private static final long serialVersionUID = 4617049187057806541L;

    @Id
    private String id; // MongoDB uses String for ObjectId
    private String employee_fname;
    private String employee_email;
    private String employee_phone;
    private String employee_gender;
    private String employee_nid;
    private String status_id;
    private String employee_birthday;
    private String employee_address;
    private String employee_salary;

    // Constructors, getters, and setters...
}


package dev.delta.stockbay.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Document(collection = "stockbay_product")
public class Product implements Serializable {
    private static final long serialVersionUID = -8698757387767929675L;

    @Id
    private String id;
    private String product_name;

    @DBRef(lazy = true)
    private Category category_id;

    @DBRef(lazy = true)
    private Supplier supplier_id;

    private String product_unit;
    private String product_alertquantity;
    private String product_supplierPrice;
    private String product_sellPrice;
    private String product_code;
    private String product_tax;
    private String warehouse_id;
    private String product_details;
    private String product_detailsforinvoice;

    // Assuming you store Buy IDs
    private Set<String> buyIds = new HashSet<>();

    // Constructors, getters, and setters...
}


package dev.delta.stockbay.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;

@Document(collection = "stockbay_revenue")
public class Revenue implements Serializable {
    private static final long serialVersionUID = 5934032785346540901L;

    @Id
    private String id;
    private String income_paymentDate;

    @DBRef(lazy = true)
    private Client customer_id;

    private String income_paymentType;
    private String income_paymentAccount;
    private String income_amount;
    private String income_details;

    // Constructors, getters, and setters...
}


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DBRef;

import java.io.Serializable;

@Document(collection = "stockbay_sell")
public class Sell implements Serializable {

    private static final long serialVersionUID = -4497992680923909136L;

    @Id
    String id;

    @DBRef
    Client customer;

    String saleDate;
    String saleStatus;
    String saleInvoiceNo;

    // Constructors, Getters, and Setters
}
