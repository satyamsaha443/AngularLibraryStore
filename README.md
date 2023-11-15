<div class="card">
    <!-- Card header -->
    <div class="card-header border-0">
      <h3 class="mb-0">Products</h3>
    </div>
    <!-- Light table -->
    <div class="table-responsive">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">Name</th>
            <th scope="col" class="sort" data-sort="budget">Category</th>
            <th scope="col" class="sort" data-sort="status">Supplier</th>
            <th scope="col">Price</th>
            <th scope="col" class="sort" data-sort="completion">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="list">
          <tr *ngFor="let p of products">
            <td scope="col" class="sort" data-sort="name">
              {{ p.product_name }}
            </td>
            <td scope="col" class="sort" data-sort="budget">
              {{ p.category_name }}
            </td>
            <td scope="col" class="sort" data-sort="status">
              {{ p.supplier_id }}
            </td>
            <td scope="col">{{ p.product_sellPrice }} $</td>
            <td scope="col" class="sort" data-sort="completion">
              {{ p.product_alertquantity }}
            </td>
            <td>
              <!-- <button type="button" (click)="edit(p.id)" data-toggle="modal" data-target="#editProduct"
                class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>-->
              <button
                type="button"
                class="btn btn-danger btn-sm"
                (click)="delete(p.id)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">Name</th>
            <th scope="col" class="sort" data-sort="budget">Category</th>
            <th scope="col" class="sort" data-sort="status">Supplier</th>
            <th scope="col">Price</th>
            <th scope="col" class="sort" data-sort="completion">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </tfoot>
      </table>
      <button
        data-toggle="modal"
        data-target="#addProduct"
        type="button"
        class="btn btn-success btn-sm"
      >
        <i class="fas fa-plus-circle"></i> Create
      </button>
  
      <app-modal-product></app-modal-product>
    </div>
    <!-- Card footer -->
  </div>


  import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ProductMessage from 'src/app/main/messages/ProductMessage';
import ProductTestService from 'src/app/main/mocks/ProductTestService';
import Product from 'src/app/main/models/Product';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends URLLoader implements OnInit {

 
  // products$:Product[]=[{
  //       "id": 1,
  //       "product_name": "",
  //       "category_id": "",
  //       "supplier_id": "",
  //       "product_unit": "",
  //       "product_alertquantity": "",
  //       "product_supplierPrice": "",
  //       "product_sellPrice": "",
  //       "product_code": "",
  //       "product_tax": "",
  //       "warehouse_id": "",
  //       "product_details": "",
  //       "product_detailsforinvoice": ""
  //   }]
  id = 0
  products:Array<any>=[]


  constructor(private router:Router, 
    private httpService:HTTPService,
    private productTestService: ProductTestService, 
    private messageService: ProductMessage) {
    super()

  }

  setId(id:number) {
    this.id = id
  }

  edit(id:any) {
    this.setId(id)
    this.productTestService.ID.next(id.toString())
  }

  delete(id:any) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
      //this.productTestService.remove(parseInt(id))
      this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/api/products/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
       window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/products/all")
     .subscribe((data:any)=>{
      console.log(data);
      
       this.products=data ;
      
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
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
