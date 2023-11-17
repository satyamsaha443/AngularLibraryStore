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
    private String id;

    @DBRef @Field(name = "customer_id")
    private Client customer_id;

    private String sale_date;
    private String sale_status;
    private String sale_invoiceNo;

    public Sell() {

    }

    public Sell(Client customer_id, String sale_date, String sale_status, String sale_invoiceNo) {
        this.customer_id = customer_id;
        this.sale_date = sale_date;
        this.sale_status = sale_status;
        this.sale_invoiceNo = sale_invoiceNo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Client getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(Client customer_id) {
        this.customer_id = customer_id;
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

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Document("inv_client")
public class Client {
    @Id
    @Field("_id")
    private String id;
    private String customer_name;
    private String customer_phone;
    private String customer_address;
    private String customer_email;
    private String status_id;
    private String customer_description;

    @DBRef
//    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Sell> sells = new HashSet<Sell>();

    @DBRef
    @JsonProperty(access = Access.WRITE_ONLY)
    private Set<Revenue> employees = new HashSet<Revenue>();

    public Client() {
        // TODO Auto-generated constructor stub
    }

    public Client(String customer_name, String customer_phone, String customer_address, String customer_email,
            String status_id, String customer_description) {
        super();
        this.customer_name = customer_name;
        this.customer_phone = customer_phone;
        this.customer_address = customer_address;
        this.customer_email = customer_email;
        this.status_id = status_id;
        this.customer_description = customer_description;
        this.id = ObjectId.get().toString();
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



package dev.delta.stockbay.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.delta.stockbay.entities.Sell;
import dev.delta.stockbay.services.SellService;

@RestController
@RequestMapping("/stockbay/sell")
@CrossOrigin
public class SellController {
	@Autowired
	SellService sellService;

	@PostMapping("/create")
	public ResponseEntity<?> addPTToBoard(@Validated @RequestBody Sell projectSell, BindingResult result) {

		if (result.hasErrors()) {
			Map<String, String> errorMap = new HashMap<String, String>();

			for (FieldError error : result.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}

		Sell newPT = sellService.saveOrUpdate(projectSell);

		return new ResponseEntity<Sell>(newPT, HttpStatus.CREATED);
	}

	@GetMapping("/all")
	public Iterable<Sell> getAllSells() {
		return sellService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Sell> getSellById(@PathVariable Long id) {
		Sell sell = sellService.findById(id);
		return new ResponseEntity<Sell>(sell, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteSell(@PathVariable Long id) {
		sellService.delete(id);
		return new ResponseEntity<String>("sell was deleted", HttpStatus.OK);
	}
}

package dev.delta.stockbay.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.delta.stockbay.entities.Client;
import dev.delta.stockbay.services.ClientService;

@RestController
@RequestMapping("/stockbay/client")
@CrossOrigin
public class ClientController {
	@Autowired
	ClientService clientService;

	@PostMapping("/create")
	public ResponseEntity<?> addPTToBoard(@Validated @RequestBody Client projectClient, BindingResult result) {

		if (result.hasErrors()) {
			Map<String, String> errorMap = new HashMap<String, String>();

			for (FieldError error : result.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}

		Client newPT = clientService.saveOrUpdate(projectClient);

		return new ResponseEntity<Client>(newPT, HttpStatus.CREATED);
	}

	@GetMapping("/all")
	public Iterable<Client> getAllClients() {
		return clientService.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Client> getClientById(@PathVariable Long id) {
		Client client = clientService.findById(id);
		return new ResponseEntity<Client>(client, HttpStatus.OK);
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteClient(@PathVariable Long id) {
		clientService.delete(id);
		return new ResponseEntity<String>("client was deleted", HttpStatus.OK);
	}
}

package dev.delta.stockbay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.delta.stockbay.entities.Sell;
import dev.delta.stockbay.repositories.SellRepository;

@Service
public class SellService {
	@Autowired
	SellRepository sellRepository;

	public Sell saveOrUpdate(Sell sell) {

		return sellRepository.save(sell);
	}

	public Iterable<Sell> findAll() {
		return sellRepository.findAll();
	}

	public Sell findById(Long id) {
		return sellRepository.getById(id);
	}

	public void delete(Long id) {
		Sell sell = findById(id);
		sellRepository.delete(sell);
	}
}


package dev.delta.stockbay.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.delta.stockbay.entities.Client;
import dev.delta.stockbay.repositories.ClientRepository;

@Service
public class ClientService {
	@Autowired
	ClientRepository clientRepository;

	public Client saveOrUpdate(Client client) {

		return clientRepository.save(client);
	}

	public Iterable<Client> findAll() {
		return clientRepository.findAll();
	}

	public Client findById(Long id) {
		return clientRepository.getById(id);
	}

	public void delete(Long id) {
		Client client = findById(id);
		clientRepository.delete(client);
	}
}

export default class Sell {
    id: number
    customer_id: string
    sale_date: string
    sale_status: string
    sale_invoiceNo: string


    constructor(
        id: number,
        customer_id: string,
        sale_date: string,
        sale_status: string,
        sale_invoiceNo: string
    ) {
        this.id = id
        this.customer_id = customer_id
        this.sale_date = sale_date
        this.sale_status = sale_status
        this.sale_invoiceNo = sale_invoiceNo
    }

}


export default class Client {
    id: number
    customer_name: string
    customer_phone: string
    customer_address: string
    customer_email: string
    status_id: string
    customer_description: string


    constructor(
        id: number,
        customer_name: string,
        customer_phone: string,
        customer_address: string,
        customer_email: string,
        status_id: string,
        customer_description: string
    ) {
        this.id = id
        this.customer_name = customer_name
        this.customer_phone = customer_phone
        this.customer_address = customer_address
        this.customer_email = customer_email
        this.status_id = status_id
        this.customer_description = customer_description
    }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import SellMessage from 'src/app/main/messages/SellMessage';
import SaleTestService from 'src/app/main/mocks/SaleTestService';
import Sell from 'src/app/main/models/Sell';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent extends URLLoader implements OnInit {


  
  sells$:Sell[]=[{
   "id": 1,
        "customer_id": "",
        "sale_date": "",
        "sale_status": "",
        "sale_invoiceNo": ""
  }]

  id: any;



  constructor(private httpService:HTTPService,private sellTestService: SaleTestService, private messageService: SellMessage) {
    super()

  }

  setId(id:any) {
    this.id = id
  }

  edit(id:any) {
    this.setId(id)
    this.sellTestService.ID.next(id.toString())
  }

  delete(id:any) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/api/sells/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
     window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/sells/all")
     .subscribe((data:any)=>{
       this.sells$=data
       
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }





}

<div class="card">
  <!-- Card header -->
  <div class="card-header border-0">
    <h3 class="mb-0">Sales</h3>
  </div>
  <!-- Light table -->
  <div class="table-responsive">
    <table class="table align-items-center table-flush">
      <thead class="thead-light">
        <tr>
          <th scope="col" class="sort" data-sort="budget">Client</th>
          <th scope="col" class="sort" data-sort="status">Status</th>
          <th scope="col">Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="list">
        <tr *ngFor="let s of sells$">
          <td scope="col" class="sort" data-sort="budget">
            {{ s.customer_id }}

            {{s | json}}
          </td>
          <td scope="col" class="sort" data-sort="status">
            {{ s.sale_status }}
          </td>
          <td scope="col">{{ s.sale_date }}</td>
          <td>
            <!--  <button (click)="edit(s.id)" type="button" data-toggle="modal" data-target="#editSale"
              class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>-->
            <button
              type="button"
              class="btn btn-danger btn-sm"
              (click)="delete(s.id)"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot class="thead-light">
        <tr>
          <th scope="col" class="sort" data-sort="budget">Client</th>
          <th scope="col" class="sort" data-sort="status">Status</th>
          <th scope="col">Date</th>
          <th>Actions</th>
        </tr>
      </tfoot>
    </table>
    <button
      type="button"
      data-toggle="modal"
      data-target="#addSale"
      class="btn btn-success btn-sm"
    >
      <i class="fas fa-plus-circle"></i> Create
    </button>

    <app-modal-sell></app-modal-sell>
  </div>
  <!-- Card footer -->
</div>
