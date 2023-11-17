package com.Main.models;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

//import io.swagger.annotations.ApiModelProperty;

@Document(collection = "inv_revenue")
public class Revenue implements Serializable {
    /**
     * 
     */
    private static final long serialVersionUID = 5934032785346540901L;
    
    @Id
//    @ApiModelProperty(notes = "The database generated revenue ID")
    private String id;
    
   // @ApiModelProperty(notes = "The date of the payment")
    private String income_paymentDate;

    @DBRef
  //  @ApiModelProperty(notes = "The customer who made the payment")
    private Client customer;

  //  @ApiModelProperty(notes = "The payment type")
    private String income_paymentType;
    
  //  @ApiModelProperty(notes = "The payment account")
    private String income_paymentAccount;
    
  //  @ApiModelProperty(notes = "The amount of the payment")
    private String income_amount;
    
   // @ApiModelProperty(notes = "Details about the payment")
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
