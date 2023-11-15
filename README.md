<div class="card">
    <!-- Card header -->
    <div class="card-header border-0">
      <h3 class="mb-0">Suppliers</h3>
    </div>
    <!-- Light table -->
    <div class="table-responsive">
      <table class="table align-items-center table-flush">
        <thead class="thead-light">
          <tr>
            <th scope="col" class="sort" data-sort="name">Name</th>
            <th scope="col" class="sort" data-sort="budget">Email</th>
            <th scope="col" class="sort" data-sort="status">Phone</th>
            <th scope="col">Address</th>
            <th scope="col" class="sort" data-sort="completion">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody class="list">
          <tr *ngFor="let s of suppliers$">
            <td scope="col" class="sort" data-sort="name">
              {{ s.supplier_name }}
            </td>
            <td scope="col" class="sort" data-sort="budget">
              {{ s.supplier_email }}
            </td>
            <td scope="col" class="sort" data-sort="status">
              {{ s.supplier_phone }}
            </td>
            <td scope="col">{{ s.supplier_address }}</td>
            <td scope="col" class="sort" data-sort="completion">
              <span class="badge bg-success">Active</span>
            </td>
            <td>
              <!--<button (click)="edit(s.id)" type="button" data-toggle="modal" data-target="#editSupplier"
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
            <th scope="col" class="sort" data-sort="name">Name</th>
            <th scope="col" class="sort" data-sort="budget">Email</th>
            <th scope="col" class="sort" data-sort="status">Phone</th>
            <th scope="col">Address</th>
            <th scope="col" class="sort" data-sort="completion">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </tfoot>
      </table>
      <button
        type="button"
        data-toggle="modal"
        data-target="#addSupplier"
        class="btn btn-success btn-sm"
      >
        <i class="fas fa-plus-circle"></i> Create
      </button>
  
      <app-modal-supplier></app-modal-supplier>
    </div>
    <!-- Card footer -->
  </div>

  import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import SupplierMessage from 'src/app/main/messages/SupplierMessage';
import SupplierTestService from 'src/app/main/mocks/SupplierTestService';
import Supplier from 'src/app/main/models/Supplier';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent extends URLLoader implements OnInit {


  
  suppliers$:Supplier[]=[{ "id": 1,
        "supplier_name": "",
        "supplier_phone": "",
        "supplier_email": "",
        "supplier_company": "",
        "supplier_address": "",
        "status_id": "",
        "supplier_description": ""}]
  id = 0


  constructor(private httpService:HTTPService, private supplierTestService: SupplierTestService, private messageService: SupplierMessage) {
    super()

  }

  setId(id:any) {
    this.id = id
  }

  edit(id:any) {
    this.setId(id)
    this.supplierTestService.ID.next(id.toString())
  }

  delete(id:any) {
    var r = confirm("Are you you want remove this record ?");
    if (r) {
      this.setId(id)
     this.httpService.remove(URLS.URL_BASE+URLS.URL_PORT+"/api/suppliers/delete/"+id)
      super.show('Confirmation', this.messageService.confirmations.delete, 'success')
      window.location.reload();
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/api/suppliers/all")
     .subscribe((data:any)=>{
      console.log(data);
      
       this.suppliers$= data ;
     },(err:HttpErrorResponse)=>{
       super.show("Error",err.message,"error")
     })
  }

}


main.ts:6  ERROR Error: Cannot find control with name: 'supplier_name'
    at _throwError (forms.mjs:3150:11)
    at setUpControl (forms.mjs:2933:13)
    at FormGroupDirective.addControl (forms.mjs:4782:9)
    at FormControlName._setUpControl (forms.mjs:5370:43)
    at FormControlName.ngOnChanges (forms.mjs:5315:18)
    at FormControlName.rememberChangeHistoryAndInvokeOnChangesHook (core.mjs:3032:14)
    at callHookInternal (core.mjs:4024:14)
    at callHook (core.mjs:4055:9)
    at callHooks (core.mjs:4006:17)
    at executeInitAndCheckHooks (core.mjs:3956:9)
handleError @ core.mjs:10614
(anonymous) @ core.mjs:28881
invoke @ zone.js:368
run @ zone.js:129
runOutsideAngular @ core.mjs:10979
(anonymous) @ core.mjs:28881
tick @ core.mjs:28745
(anonymous) @ core.mjs:28895
invoke @ zone.js:368
onInvoke @ core.mjs:11083
invoke @ zone.js:367
run @ zone.js:129
run @ core.mjs:10934
next @ core.mjs:28894
next @ Subscriber.js:91
_next @ Subscriber.js:60
next @ Subscriber.js:31
(anonymous) @ Subject.js:34
errorContext @ errorContext.js:19
next @ Subject.js:27
emit @ core.mjs:10670
checkStable @ core.mjs:11002
onHasTask @ core.mjs:11100
hasTask @ zone.js:422
_updateTaskCount @ zone.js:443
_updateTaskCount @ zone.js:272
runTask @ zone.js:190
drainMicroTaskQueue @ zone.js:581
Promise.then (async)
nativeScheduleMicroTask @ zone.js:557
scheduleMicroTask @ zone.js:568
scheduleTask @ zone.js:392
scheduleTask @ zone.js:216
scheduleMicroTask @ zone.js:236
scheduleResolveOrReject @ zone.js:1247
then @ zone.js:1442
bootstrapModule @ core.mjs:28406
4913 @ main.ts:6
__webpack_require__ @ bootstrap:19
__webpack_exec__ @ main.ts:7
(anonymous) @ main.ts:7
__webpack_require__.O @ chunk loaded:23
(anonymous) @ main.ts:7
webpackJsonpCallback @ jsonp chunk loading:34
(anonymous) @ main.js:2
Show 39 more frames
Show less
main.ts:6  ERROR Error: Cannot find control with name: 'supplier_phone'
    at _throwError (forms.mjs:3150:11)
    at setUpControl (forms.mjs:2933:13)
    at FormGroupDirective.addControl (forms.mjs:4782:9)
    at FormControlName._setUpControl (forms.mjs:5370:43)
    at FormControlName.ngOnChanges (forms.mjs:5315:18)
    at FormControlName.rememberChangeHistoryAndInvokeOnChangesHook (core.mjs:3032:14)
    at callHookInternal (core.mjs:4024:14)
    at callHook (core.mjs:4055:9)
    at callHooks (core.mjs:4006:17)
    at executeInitAndCheckHooks (core.mjs:3956:9)
