package com.Main.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Document(collection = "inv_products")
public class Products implements Serializable {
    /**
     * 
     */
    private static final long serialVersionUID = -8698757387767929675L;
    @Id
    String id;
    String product_name;

    Category category_id;

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

    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Buy> buys = new HashSet<Buy>();

    public Products() {
        // TODO Auto-generated constructor stub
    }

    public Products(String product_name, Category category_id, Supplier supplier_id, String product_unit,
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

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public Set<Buy> getBuys() {
        return buys;
    }

    public void setBuys(Set<Buy> buys) {
        this.buys = buys;
    }

}


package com.Main.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Document(collection = "inv_category")
public class Category implements Serializable {
    
    private static final long serialVersionUID = -3942285530464977887L;
    
    @Id
    private String id;
    private String category_name;
    private String status_id;
    private String category_details;

    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Buy> products = new HashSet<>();

    public Category() {
        
    }

    public Category(String category_name, String status_id, String category_details) {
        this.category_name = category_name;
        this.status_id = status_id;
        this.category_details = category_details;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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
  
    public Set<Buy> getProducts() {
        return products;
    }

    public void setProducts(Set<Buy> products) {
        this.products = products;
    }

}


package com.Main.models;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Document(collection = "inv_supplier")
public class Supplier {
    @Id
    String id;
    String supplier_name;
    String supplier_phone;
    String supplier_email;
    String supplier_company;
    String supplier_address;
    String status_id;
    String supplier_description;

    @DBRef
    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Buy> buys = new HashSet<Buy>();

    @DBRef
    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Products> products = new HashSet<Products>();

    @DBRef
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

    public String getId() {
        return id;
    }

    public void setId(String id) {
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
