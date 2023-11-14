Error: src/app/modules/buy/add-buy/add-buy.component.ts:64:17 - error TS2769: No overload matches this call.      
  Overload 1 of 2, '(observerOrNext?: Partial<Observer<Object>> | ((value: Object) => void) | undefined): Subscription', gave the following error.
    Argument of type '(data: Supplier[]) => void' is not assignable to parameter of type 'Partial<Observer<Object>> | ((value: Object) => void) | undefined'.
      Type '(data: Supplier[]) => void' is not assignable to type '(value: Object) => void'.
        Types of parameters 'data' and 'value' are incompatible.
          The 'Object' type is assignable to very few other types. Did you mean to use the 'any' type instead?    
            Type 'Object' is missing the following properties from type 'Supplier[]': length, pop, push, concat, and 29 more.
  Overload 2 of 2, '(next?: ((value: Object) => void) | null | undefined, error?: ((error: any) => void) | null | 
undefined, complete?: (() => void) | null | undefined): Subscription', gave the following error.
    Argument of type '(data: Supplier[]) => void' is not assignable to parameter of type '(value: Object) => void'.
      Types of parameters 'data' and 'value' are incompatible.
        Type 'Object' is not assignable to type 'Supplier[]'.
          The 'Object' type is assignable to very few other types. Did you mean to use the 'any' type instead?    

64      .subscribe((data:Supplier[])=>{
                   ~~~~~~~~~~~~~~~~~~~~





× Failed to compile.


import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import BuyMessage from 'src/app/main/messages/BuyMessage';
import BuyTestService from 'src/app/main/mocks/BuyTestService';
import Product from 'src/app/main/models/Product';
import Supplier from 'src/app/main/models/Supplier';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import BuyValidation from 'src/app/main/validations/BuyValidation';

@Component({
  selector: 'app-add-buy',
  templateUrl: './add-buy.component.html',
  styleUrls: ['./add-buy.component.css']
})
export class AddBuyComponent extends URLLoader implements OnInit {

  buyForm: FormGroup
  msg: BuyMessage
  submitted = false
  suppliers$:Supplier[]=[]
  products$:Product[]=[]

  get f() { return this.buyForm.controls; }

  constructor(private httpService:HTTPService ,
    private validation: BuyValidation, 
    private message: BuyMessage, 
    private buyTestService: BuyTestService) {
    super()
    this.buyForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    this.getAllProducts()
    this.getAllSuppliers()
  }

  reset() {
    this.buyForm.reset()
  }

  add() {
    
    this.submitted = true;
    this.buyForm.value.supplier=this.suppliers$.filter(x => 
    x.id == parseInt(this.buyForm.value.supplier))[0]
    this.buyForm.value.product_id=this.products$.filter(x => 
    x.id == parseInt(this.buyForm.value.product_id))[0]

    if (this.validation.checkValidation()) {
      this.httpService.create(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/buy/create",this.buyForm.value)    
      super.show('Confirmation', this.msg.confirmations.add, 'success')
       window.location.reload();
     
    }
  }

  getAllSuppliers() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/supplier/all")
     .subscribe((data:Supplier[])=>{
       this.suppliers$=data
     })
  }


  getAllProducts() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/product/all")
     .subscribe((data:any)=>{
       this.products$=data as Product[];   
     })
  }

}


export default class Supplier {
    id: number
    supplier_name: string
    supplier_phone: string
    supplier_email: string
    supplier_company: string
    supplier_address: string
    status_id: string
    supplier_description: string


    constructor(
        id: number,
        supplier_name: string,
        supplier_phone: string,
        supplier_email: string,
        supplier_company: string,
        supplier_address: string,
        status_id: string,
        supplier_description: string
    ) {
        this.id = id
        this.supplier_name = supplier_name
        this.supplier_phone = supplier_phone
        this.supplier_email = supplier_email
        this.supplier_company = supplier_company
        this.supplier_address = supplier_address
        this.status_id = status_id
        this.supplier_description = supplier_description
    }

}
