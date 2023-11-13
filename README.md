package com.Jwt.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Jwt.models.Buy;
import com.Jwt.security.services.BuyService;

@RestController
@RequestMapping("/api/buys")
public class BuyController {

    @Autowired
    private BuyService buyService;
    

    public BuyService getBuyService() {
		return buyService;
	}

	public void setBuyService(BuyService buyService) {
		this.buyService = buyService;
	}

	@GetMapping
    public List<Buy> getAllBuys() {
        return buyService.getAllBuys();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Buy> getBuyById(@PathVariable String id) {
        Buy buy = buyService.getBuyById(id);
        if (buy != null) {
            return ResponseEntity.ok(buy);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Buy createBuy(@RequestBody Buy buy) {
        return buyService.createBuy(buy);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Buy> updateBuy(@PathVariable String id, @RequestBody Buy buy) {
        if (buyService.getBuyById(id) != null) {
            return ResponseEntity.ok(buyService.updateBuy(id, buy));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBuy(@PathVariable String id) {
        if (buyService.getBuyById(id) != null) {
            buyService.deleteBuy(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}


package com.Jwt.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.Date;

@Document(collection = "inv_buy")
public class Buy implements Serializable {

    private static final long serialVersionUID = 105253940174394025L;

    @Id
    private String id;

    @DBRef
    private Supplier supplier;

    @DBRef
    private Products product;

    private Date purchaseDate;
    private String purchaseInvoiceNo;
    private String purchaseStatus;

    public Buy() {

    }

    public Buy(Supplier supplier, Products product, Date purchaseDate, String purchaseInvoiceNo, String purchaseStatus) {
        this.supplier = supplier;
        this.product = product;
        this.purchaseDate = purchaseDate;
        this.purchaseInvoiceNo = purchaseInvoiceNo;
        this.purchaseStatus = purchaseStatus;
    }

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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Buy [id=" + id + ", supplier=" + supplier + ", product=" + product + ", purchaseDate=" + purchaseDate
				+ ", purchaseInvoiceNo=" + purchaseInvoiceNo + ", purchaseStatus=" + purchaseStatus + "]";
	}
    
}

package com.Jwt.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Jwt.models.Buy;
import com.Jwt.repository.BuyRepository;

@Service
public class BuyService {
	
	@Autowired
	private BuyRepository buyRepository;
	
	
	   public List<Buy> getBuys() {
	        return buyRepository.findAll();
	    }
	    

	public List<Buy> getAllBuys(){
		return buyRepository.findAll();
	}
	public Buy getBuyById(String id) {
		return buyRepository.findById(id).orElse(null);
	}
	
	public Buy createBuy(Buy buy) {
		return buyRepository.save(buy);
	}
	public Buy updateBuy(String id, Buy buy) {
		buy.setId(id);
		return buyRepository.save(buy);
	}
	
	public void deleteBuy(String id) {
		buyRepository.deleteById(id);
	}
	public BuyRepository getBuyRepository() {
		return buyRepository;
	}
	public void setBuyRepository(BuyRepository buyRepository) {
		this.buyRepository = buyRepository;
	}
	

}
