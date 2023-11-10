package com.Jwt.models;


import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Products {
    
    @Id
    private String id;
    private String name;
    private String description;
    private String sku;
    private String category;
    private String manufacturer;
    private double price;
    private int quantity;
    private int sold;
    private List<String> images;
    
    public Products() {
    }
    
    public Products(String name, String description, String sku, String category,
            String manufacturer, double price, int quantity, int sold,
            List<String> images) {
        this.name = name;
        this.description = description;
        this.sku = sku;
        this.category = category;
        this.manufacturer = manufacturer;
        this.price = price;
        this.quantity = quantity;
        this.sold = sold;
        this.images = images;
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
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getSku() {
        return sku;
    }
    public void setSku(String sku) {
        this.sku = sku;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getManufacturer() {
        return manufacturer;
    }
    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public int getSold() {
        return sold;
    }
    public void setSold(int sold) {
        this.sold = sold;
    }
    public List<String> getImages() {
        return images;
    }
    public void setImages(List<String> images) {
        this.images = images;
    }
}
