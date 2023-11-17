package dev.delta.stockbay.entities;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "stockbay_sell")
public class Sell implements Serializable {
    private static final long serialVersionUID = -4497992680923909136L;

    @Id
    private String id; // MongoDB typically uses String for ID

    @DBRef
    private Client customer; // Reference to Client object

    private String sale_date;
    private String sale_status;
    private String sale_invoiceNo;

    public Sell() {
        // Default constructor
    }

    public Sell(Client customer, String sale_date, String sale_status, String sale_invoiceNo) {
        this.customer = customer;
        this.sale_date = sale_date;
        this.sale_status = sale_status;
        this.sale_invoiceNo = sale_invoiceNo;
    }

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Client getCustomer() {
        return customer;
    }

    public void setCustomer(Client customer) {
        this.customer = customer;
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

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "stockbay_client")
public class Client implements Serializable {
    private static final long serialVersionUID = -874579554809953800L;

    @Id
    private String id; // MongoDB uses String for ID
    private String customer_name;
    private String customer_phone;
    private String customer_address;
    private String customer_email;
    private String status_id;
    private String customer_description;

    @DBRef
    private Set<Sell> sells = new HashSet<>();

    // Assuming Revenue is another entity that needs to be converted for MongoDB
    @DBRef
    private Set<Revenue> employees = new HashSet<>();

    public Client() {
        // Default constructor
    }

    public Client(String customer_name, String customer_phone, String customer_address, 
                  String customer_email, String status_id, String customer_description) {
        this.customer_name = customer_name;
        this.customer_phone = customer_phone;
        this.customer_address = customer_address;
        this.customer_email = customer_email;
        this.status_id = status_id;
        this.customer_description = customer_description;
    }

    // Getters and setters

    // ... other getters and setters
}