package com.Jwt.models;

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
