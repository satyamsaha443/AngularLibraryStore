import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import SellMessage from 'src/app/main/messages/SellMessage';
import SaleTestService from 'src/app/main/mocks/SaleTestService';
import Sell from 'src/app/main/models/Sell';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { URLLoader } from '../../../../main/configs/URLLoader';

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
  id = 0


  constructor(private httpService:HTTPService,private sellTestService: SaleTestService, private messageService: SellMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.sellTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
       this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/sell/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
     window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/sell/all")
     .subscribe((data:Sell[])=>{
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
            {{ s.customer_id.customer_name }}
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

    <app-modal-sale></app-modal-sale>
  </div>
  <!-- Card footer -->
</div>

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
