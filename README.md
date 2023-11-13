export default class Stock {
   
    id:number
    name:string
    status:string
    details:string
    constructor( id:number,
    name:string,
    status:string,
    details:string)
    {
      this.id=id;
      this.name=name
      this.details=details
      this.status=status
    }
    
}


<div class="card">
  <!-- Card header -->
  <div class="card-header border-0">
    <h3 class="mb-0">WareHouses</h3>
  </div>
  <!-- Light table -->
  <div class="table-responsive">
    <table class="table align-items-center table-flush">
      <thead class="thead-light">
        <tr>
          <th scope="col" class="sort" data-sort="name">Name</th>
          <th scope="col" class="sort" data-sort="budget">Status</th>
          <th scope="col" class="sort" data-sort="status">Details</th>
        </tr>
      </thead>
      <tbody class="list">
        <tr *ngFor="let s of stock$">
          <td scope="col" class="sort" data-sort="name">{{ s.name }}</td>
          <td scope="col" class="sort" data-sort="budget">{{ s.status }}</td>
          <td scope="col" class="sort" data-sort="status">{{ s.details }}</td>
        </tr>
      </tbody>
      <tfoot class="thead-light">
        <tr>
          <th scope="col" class="sort" data-sort="name">Name</th>
          <th scope="col" class="sort" data-sort="budget">Status</th>
          <th scope="col" class="sort" data-sort="status">Details</th>
        </tr>
      </tfoot>
    </table>
  </div>
  <!-- Card footer -->
</div>



import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/main/models/Stock';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import { URLLoader } from '../../../../main/configs/URLLoader';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  stock$:Stock[]=[{
        "id": 1,
        "name": "",
        "status": "",
        "details": ""
    }]
  constructor(private httpService:HTTPService) {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
 this.getAll()
}

 getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/warehouse/all")
     .subscribe((data:Stock[])=>{
       this.stock$=data
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}
