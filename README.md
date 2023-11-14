// src/app/product.ts

export interface Product {
  id: string;
  productName: string;
  category: Category;
  supplier: Supplier;
  productUnit: string;
  productAlertQuantity: string;
  productSupplierPrice: string;
  productSellPrice: string;
  productCode: string;
  productTax: string;
  warehouseId: string;
  productDetails: string;
  productDetailsForInvoice: string;
  buys: Buy[];
}

export interface Category {
  id: string;
  category_name: string;
  status_id: string;
  category_details: string;
}

export interface Supplier {
  id: string;
  supplierName: string;
  supplierPhone: string;
  supplierEmail: string;
  supplierCompany: string;
  supplierAddress: string;
  statusId: string;
  supplierDescription: string;
}

export interface Buy {
  // Define the Buy properties here if needed.
}




// src/app/product.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'YOUR_BACKEND_API_URL/products'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}



// src/app/product-management/product-management.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  // Implement other product management functions here (create, update, delete).
}



<!-- src/app/product-management/product-management.component.html -->

<div class="container">
  <h2>Product Management</h2>

  <!-- Button to add a new product -->
  <button class="btn btn-primary" (click)="openCreateProductModal()">Add Product</button>

  <!-- Product list table -->
  <table class="table mt-3">
    <thead>
      <tr>
        <th>ID</th>
        <th>Product Name</th>
        <th>Category</th>
        <th>Supplier</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let product of products">
        <td>{{ product.id }}</td>
        <td>{{ product.productName }}</td>
        <td>{{ product.category.category_name }}</td>
        <td>{{ product.supplier.supplierName }}</td>
        <td>
          <button class="btn btn-sm btn-info" (click)="editProduct(product)">Edit</button>
          <button class="btn btn-sm btn-danger" (click)="deleteProduct(product.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Create/Edit Product Modal (You can create a separate component for the modal if needed) -->
  <div class="modal" [ngClass]="{'is-active': isModalOpen}">
    <div class="modal-background" (click)="closeModal()"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ isEditing ? 'Edit Product' : 'Create Product' }}</p>
        <button class="delete" aria-label="close" (click)="closeModal()"></button>
      </header>
      <section class="modal-card-body">
        <!-- Form for creating/editing products -->
        <!-- You can create a separate component for the form if needed -->
        <form (submit)="isEditing ? updateProduct() : createProduct()">
          <!-- Input fields for product properties -->
          <div class="field">
            <label class="label">Product Name</label>
            <input class="input" type="text" [(ngModel)]="formData.productName" name="productName" required>
          </div>
          <div class="field">
            <label class="label">Category</label>
            <select class="select" [(ngModel)]="formData.category" name="category" required>
              <option *ngFor="let category of categories" [ngValue]="category">{{ category.category_name }}</option>
            </select>
          </div>
          <div class="field">
            <label class="label">Supplier</label>
            <select class="select" [(ngModel)]="formData.supplier" name="supplier" required>
              <option *ngFor="let supplier of suppliers" [ngValue]="supplier">{{ supplier.supplierName }}</option>
            </select>
          </div>
          <!-- Add more input fields for other product properties -->

          <!-- Submit button -->
          <div class="field">
            <button class="button is-primary" type="submit">{{ isEditing ? 'Update' : 'Create' }}</button>
          </div>
        </form>
      </section>
    </div>
  </div>
</div>
