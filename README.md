package models;

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


package models;

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


package models;

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

package models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Date;

@Document(collection = "inv_buy")
public class Buy  {

//    private static final long serialVersionUID = 105253940174394025L;

    @Id
    private String id;

    @DBRef
    private Supplier supplier;

    @DBRef
    private Products product;

    private Date purchaseDate;
    private String purchaseInvoiceNo;
    private String purchaseStatus;



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public Products getProduct() {
        return product;
    }

    public void setProduct(Products product) {
        this.product = product;
    }

    public Date getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(Date purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public String getPurchaseInvoiceNo() {
        return purchaseInvoiceNo;
    }

    public void setPurchaseInvoiceNo(String purchaseInvoiceNo) {
        this.purchaseInvoiceNo = purchaseInvoiceNo;
    }

    public String getPurchaseStatus() {
        return purchaseStatus;
    }

    public void setPurchaseStatus(String purchaseStatus) {
        this.purchaseStatus = purchaseStatus;
    }

//	public static long getSerialversionuid() {
//		return serialVersionUID;
//	}

    
}


package models;

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
