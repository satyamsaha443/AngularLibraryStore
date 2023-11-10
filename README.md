package com.Jwt.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "orders")
public class Orders {

    @Id
    private String id;

    @Field("userType")
    private UserType userType;

    @Field("orderDate")
    private String orderDate;

    @Field("deliveryDate")
    private String deliveryDate;

    @Field("person")
    private Person person;

    @Field("items")
    private List<ProductOrder> items = new ArrayList<>();

    @Field("status")
    private status status;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public UserType getUserType() {
		return userType;
	}

	public void setUserType(UserType userType) {
		this.userType = userType;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public String getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(String deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public List<ProductOrder> getItems() {
		return items;
	}

	public void setItems(List<ProductOrder> items) {
		this.items = items;
	}

	public status getStatus() {
		return status;
	}

	public void setStatus(status status) {
		this.status = status;
	}
	


    // getters and setters
    
}



