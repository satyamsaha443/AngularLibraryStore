package com.Main.models;

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
