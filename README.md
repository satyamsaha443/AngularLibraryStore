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
import { FormControl, FormGroup } from '@angular/forms';
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

supplierForm !: FormGroup;
  
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
    this.supplierForm= new FormGroup({
      supplier_name: new FormControl(''),
      supplier_phone:new FormControl('')
    });
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




import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Validation from './Validation';
@Injectable({
    providedIn: 'root'
})
export default class SupplierValidation extends Validation {
    constructor() {
        super()
        super.formGroup = this.createFormGroup()
    }
    createFormGroup() {
        return new FormGroup({

            supplier_name: new FormControl('', Validators.required),
            supplier_phone: new FormControl('', Validators.required),
            supplier_email: new FormControl('', Validators.required),
            supplier_company: new FormControl('', Validators.required),
            supplier_address: new FormControl('', Validators.required),
            status_id: new FormControl('', Validators.required),
            supplier_description: new FormControl('', Validators.required),

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
onLeave @ core.mjs:11133
onInvoke @ core.mjs:11089
invoke @ zone.js:367
run @ zone.js:129
run @ core.mjs:10934
(anonymous) @ router.mjs:6262
timer @ zone.js:2367
invokeTask @ zone.js:402
runTask @ zone.js:173
invokeTask @ zone.js:483
ZoneTask.invoke @ zone.js:472
data.args.<computed> @ zone.js:2347
setTimeout (async)
scheduleTask @ zone.js:2349
scheduleTask @ zone.js:389
scheduleTask @ zone.js:216
scheduleMacroTask @ zone.js:239
scheduleMacroTaskWithCurrentZone @ zone.js:672
(anonymous) @ zone.js:2391
proto.<computed> @ zone.js:962
(anonymous) @ router.mjs:6261
invoke @ zone.js:368
run @ zone.js:129
runOutsideAngular @ core.mjs:10979
scheduleScrollEvent @ router.mjs:6257
(anonymous) @ router.mjs:6222
next @ Subscriber.js:91
_next @ Subscriber.js:60
next @ Subscriber.js:31
(anonymous) @ Subject.js:34
errorContext @ errorContext.js:19
next @ Subject.js:27
next @ router.mjs:4435
source.subscribe.isUnsub @ tap.js:17
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ take.js:12
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ map.js:7
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
source.subscribe.isUnsub @ tap.js:18
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ map.js:7
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
subscribe.innerSubscriber @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ map.js:7
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ innerFrom.js:51
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ map.js:6
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
source.subscribe.isComplete @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
subscribe.innerSubscriber @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ map.js:7
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ take.js:12
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ defaultIfEmpty.js:11
OperatorSubscriber._complete @ OperatorSubscriber.js:36
complete @ Subscriber.js:49
(anonymous) @ innerFrom.js:53
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ defaultIfEmpty.js:6
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ take.js:10
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ map.js:6
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
source.subscribe.isComplete @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
subscribe.innerSubscriber @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ map.js:7
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
source.subscribe.isUnsub @ tap.js:18
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
subscribe.innerSubscriber @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
source.subscribe.isUnsub @ tap.js:18
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
subscribe.innerComplete @ mergeInternals.js:25
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
subscribe.innerComplete @ mergeInternals.js:25
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ innerFrom.js:51
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
doInnerSub @ mergeInternals.js:19
outerNext @ mergeInternals.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
source.subscribe.buffer @ takeLast.js:14
OperatorSubscriber._complete @ OperatorSubscriber.js:36
complete @ Subscriber.js:49
source.subscribe.isUnsub @ tap.js:23
OperatorSubscriber._complete @ OperatorSubscriber.js:36
complete @ Subscriber.js:49
checkComplete @ mergeInternals.js:11
(anonymous) @ mergeInternals.js:52
OperatorSubscriber._complete @ OperatorSubscriber.js:36
complete @ Subscriber.js:49
(anonymous) @ innerFrom.js:53
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
mergeInternals @ mergeInternals.js:50
(anonymous) @ mergeMap.js:13
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ tap.js:15
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ takeLast.js:9
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
mergeInternals @ mergeInternals.js:50
(anonymous) @ mergeMap.js:13
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
doInnerSub @ mergeInternals.js:19
outerNext @ mergeInternals.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ innerFrom.js:51
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
mergeInternals @ mergeInternals.js:50
(anonymous) @ mergeMap.js:13
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ tap.js:15
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
source.subscribe.isComplete @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
source.subscribe.isUnsub @ tap.js:18
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ innerFrom.js:51
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ tap.js:15
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ switchMap.js:10
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ tap.js:15
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
Zone - Promise.then (async)
onScheduleTask @ core.mjs:10751
scheduleTask @ zone.js:382
onScheduleTask @ zone.js:279
scheduleTask @ zone.js:382
scheduleTask @ zone.js:216
scheduleMicroTask @ zone.js:236
scheduleResolveOrReject @ zone.js:1247
then @ zone.js:1442
(anonymous) @ innerFrom.js:59
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
source.subscribe.isComplete @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ innerFrom.js:51
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ switchMap.js:10
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
mergeInternals @ mergeInternals.js:50
(anonymous) @ mergeMap.js:13
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ tap.js:15
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
source.subscribe.isComplete @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
source.subscribe.isUnsub @ tap.js:18
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ innerFrom.js:51
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ tap.js:15
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ switchMap.js:10
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ tap.js:15
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ map.js:6
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
mergeInternals @ mergeInternals.js:50
(anonymous) @ mergeMap.js:13
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ tap.js:15
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ filter.js:6
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ switchMap.js:10
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ switchMap.js:10
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ switchMap.js:10
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ map.js:6
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ tap.js:15
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ map.js:6
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ take.js:10
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ tap.js:15
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ takeUntil.js:8
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ finalize.js:5
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ catchError.js:9
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
source.subscribe.isComplete @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ map.js:7
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ filter.js:6
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ Subject.js:34
errorContext @ errorContext.js:19
next @ Subject.js:27
next @ BehaviorSubject.js:24
handleNavigationRequest @ router.mjs:4228
scheduleNavigation @ router.mjs:5408
navigateToSyncWithBrowser @ router.mjs:5125
initialNavigation @ router.mjs:5072
(anonymous) @ router.mjs:6424
(anonymous) @ core.mjs:28784
_loadComponent @ core.mjs:28784
bootstrap @ core.mjs:28710
(anonymous) @ core.mjs:28411
_moduleDoBootstrap @ core.mjs:28411
(anonymous) @ core.mjs:28381
invoke @ zone.js:368
onInvoke @ core.mjs:11083
invoke @ zone.js:367
run @ zone.js:129
(anonymous) @ zone.js:1257
invokeTask @ zone.js:402
(anonymous) @ core.mjs:10757
onInvokeTask @ core.mjs:10757
invokeTask @ zone.js:401
onInvokeTask @ core.mjs:11070
invokeTask @ zone.js:401
runTask @ zone.js:173
drainMicroTaskQueue @ zone.js:581
Zone - Promise.then (async)
onScheduleTask @ core.mjs:10751
scheduleTask @ zone.js:382
onScheduleTask @ zone.js:279
scheduleTask @ zone.js:382
scheduleTask @ zone.js:216
scheduleMicroTask @ zone.js:236
scheduleResolveOrReject @ zone.js:1247
then @ zone.js:1442
(anonymous) @ core.mjs:28377
_callAndReportToErrorHandler @ core.mjs:28488
(anonymous) @ core.mjs:28374
invoke @ zone.js:368
onInvoke @ core.mjs:11083
invoke @ zone.js:367
run @ zone.js:129
run @ core.mjs:10934
bootstrapModuleFactory @ core.mjs:28353
(anonymous) @ core.mjs:28406
invoke @ zone.js:368
run @ zone.js:129
(anonymous) @ zone.js:1257
invokeTask @ zone.js:402
runTask @ zone.js:173
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
Show 445 more frames
Show less
supplier.component.ts:68 (2) [{…}, {…}]
supplier.component.ts:67  ERROR Error: Cannot find control with name: 'supplier_email'
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
onLeave @ core.mjs:11133
onInvokeTask @ core.mjs:11077
invokeTask @ zone.js:401
runTask @ zone.js:173
invokeTask @ zone.js:483
invokeTask @ zone.js:1631
globalCallback @ zone.js:1674
globalZoneAwareCallback @ zone.js:1695
load (async)
customScheduleGlobal @ zone.js:1779
scheduleTask @ zone.js:389
onScheduleTask @ core.mjs:10752
scheduleTask @ zone.js:382
onScheduleTask @ zone.js:279
scheduleTask @ zone.js:382
scheduleTask @ zone.js:216
scheduleEventTask @ zone.js:242
(anonymous) @ zone.js:1934
(anonymous) @ http.mjs:2176
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
source.subscribe.isComplete @ switchMap.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ innerFrom.js:51
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ switchMap.js:10
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ finalize.js:5
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ finalize.js:5
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
doInnerSub @ mergeInternals.js:19
outerNext @ mergeInternals.js:14
OperatorSubscriber._next @ OperatorSubscriber.js:13
next @ Subscriber.js:31
(anonymous) @ innerFrom.js:51
_trySubscribe @ Observable.js:37
(anonymous) @ Observable.js:31
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
mergeInternals @ mergeInternals.js:50
(anonymous) @ mergeMap.js:13
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ filter.js:6
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
(anonymous) @ map.js:6
(anonymous) @ lift.js:10
(anonymous) @ Observable.js:26
errorContext @ errorContext.js:19
subscribe @ Observable.js:22
getAll @ supplier.component.ts:67
ngOnInit @ supplier.component.ts:58
callHookInternal @ core.mjs:4024
callHook @ core.mjs:4051
callHooks @ core.mjs:4006
executeInitAndCheckHooks @ core.mjs:3956
refreshView @ core.mjs:13513
detectChangesInView @ core.mjs:13663
detectChangesInEmbeddedViews @ core.mjs:13606
refreshView @ core.mjs:13522
detectChangesInView @ core.mjs:13663
detectChangesInEmbeddedViews @ core.mjs:13606
refreshView @ core.mjs:13522
detectChangesInView @ core.mjs:13663
detectChangesInComponent @ core.mjs:13638
detectChangesInChildComponents @ core.mjs:13676
refreshView @ core.mjs:13548
detectChangesInternal @ core.mjs:13437
detectChanges @ core.mjs:13954
tick @ core.mjs:28735
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
Show 142 more frames
Show less
supplier.component.ts:67  ERROR Error: Cannot find control with name: 'supplier_company'
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
