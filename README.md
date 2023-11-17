 @PostMapping("/create")
    public ResponseEntity<?> createSellWithClient(@Validated @RequestBody Sell sell, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            for (FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            
            return new ResponseEntity<>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Client clientFromSell = sell.getCustomer(); // Get the client object from the sell
        if (clientFromSell != null) {
            // Create a new client object from the data in the Sell object
            // Assuming these methods exist in your Client class
            Client client = new Client(clientFromSell.getCustomer_name(), clientFromSell.getCustomer_phone(),
                                       clientFromSell.getCustomer_address(), clientFromSell.getCustomer_email(),
                                       clientFromSell.getStatus_id(), clientFromSell.getCustomer_description());

            // Save the new client object to the database
            client = ClientRepository.save(client);

            // Associate the new client object with the sell object
            sell.setCustomer(client);
        }

        // Save the new sell object to the database
        Sell newSell = sellService.saveOrUpdate(sell);
        return new ResponseEntity<>(newSell, HttpStatus.CREATED);
    }

    package com.Main.models;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document(collection = "inv_sell")
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


package com.Main.models;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("inv_client")
public class Client {
//	private static final long serialVersionUID = -874579554809953800L;

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

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCustomer_name() {
		return customer_name;
	}

	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}

	public String getCustomer_phone() {
		return customer_phone;
	}

	public void setCustomer_phone(String customer_phone) {
		this.customer_phone = customer_phone;
	}

	public String getCustomer_address() {
		return customer_address;
	}

	public void setCustomer_address(String customer_address) {
		this.customer_address = customer_address;
	}

	public String getCustomer_email() {
		return customer_email;
	}

	public void setCustomer_email(String customer_email) {
		this.customer_email = customer_email;
	}

	public String getStatus_id() {
		return status_id;
	}

	public void setStatus_id(String status_id) {
		this.status_id = status_id;
	}

	public String getCustomer_description() {
		return customer_description;
	}

	public void setCustomer_description(String customer_description) {
		this.customer_description = customer_description;
	}

	public Set<Sell> getSells() {
		return sells;
	}

	public void setSells(Set<Sell> sells) {
		this.sells = sells;
	}

	public Set<Revenue> getEmployees() {
		return employees;
	}

	public void setEmployees(Set<Revenue> employees) {
		this.employees = employees;
	}
    

}
