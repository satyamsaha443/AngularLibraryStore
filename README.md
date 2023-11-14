import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export default class ExpenseMessage {

    confirmations = {
        'title': 'Confirmation', 
        'add': 'Expense has been added',
        'edit': 'Expense has been successfully modified',
        'delete': 'Expense has been removed'
    }

    validations = {
        id: 1,
        "expense_paymentDate": "Payment date is required",
        "supplier_id": "Supplier is required",
        "expense_paymentType": "Payment type is required",
        "expense_paymentAccount": "Payment account is required",
        "expense_amount": "Amount is required",
        "expense_details": ""
    }

    constructor() {}
}


import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class ExpenseTestService implements Service {
    public ID = new BehaviorSubject<string | null>(null);
    static _stock = [{
        id: 1,
        "expense_paymentDate": "22/11/2020",
        "supplier_id": "string",
        "expense_paymentType": "virement",
        "expense_paymentAccount": "FRA 3423 434 23423",
        "expense_amount": "34234",
        "expense_details": "string"
    }]
    static id = 0

    public getAll() {
        return ExpenseTestService._stock;
    }

    public get(id:any) {
        return ExpenseTestService._stock.find(item => item.id === id);
    };

    public create(data:any) {
        data["id"] = ExpenseTestService.id
        ExpenseTestService._stock.push(data);
        ExpenseTestService.id++
        console.log(data)
    };

    public update(data:any) {

        var foundIndex = ExpenseTestService._stock.findIndex(item => item.id === data.id);
        ExpenseTestService._stock[foundIndex] = data;
    };

    public remove(id:any) {
        ExpenseTestService._stock.splice(id, 1);
    };


}


export default class Expense {
    id: number
    expense_paymentDate: string
    supplier_id: string
    expense_paymentType: string
    expense_paymentAccount: string
    expense_amount: string
    expense_details: string


    constructor(
        id: number,
        expense_paymentDate: string,
        supplier_id: string,
        expense_paymentType: string,
        expense_paymentAccount: string,
        expense_amount: string,
        expense_details: string
    ) {
        this.id = id
        this.expense_paymentDate = expense_paymentDate
        this.supplier_id = supplier_id
        this.expense_paymentType = expense_paymentType
        this.expense_paymentAccount = expense_paymentAccount
        this.expense_amount = expense_amount
        this.expense_details = expense_details
    }

}

<form class="form-horizontal" [formGroup]="expenseForm">
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label for="expense_paymentDate" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit">
                Date of payment
              </font> </font
            ><i
              aria-hidden="true"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              class="fa fa-asterisk text-danger require"
              data-original-title="Required"
            ></i>
          </label>
          <div class="col-sm-8">
            <div class="input-group date">
              <div class="input-group-addon"><i class="fa fa-calendar"></i></div>
              <input
                type="date"
                [ngClass]="{
                  'is-invalid': submitted && f.expense_paymentDate.errors
                }"
                formControlName="expense_paymentDate"
                name="expense_paymentDate"
                id="expense_paymentDate"
                placeholder="AAAA-MM-JJ"
                class="form-control"
              />
            </div>
            <div
              *ngIf="submitted && f.expense_paymentDate.errors"
              class="alert alert-danger"
            >
              <div *ngIf="submitted && f.expense_paymentDate.errors.required">
                {{ msg.validations.expense_paymentDate }}
              </div>
            </div>
            <!---->
          </div>
        </div>
        <div class="form-group">
          <label for="supplier_id" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Supplier </font> </font
            ><i
              aria-hidden="true"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              class="fa fa-asterisk text-danger require"
              data-original-title="Required"
            ></i>
          </label>
          <div class="col-sm-8">
            <select
              id="supplier_id"
              [ngClass]="{ 'is-invalid': submitted && f.supplier_id.errors }"
              formControlName="supplier_id"
              name="supplier_id"
              class="form-control"
            >
              <option value="">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Select</font>
                </font>
              </option>
              <option value="{{ c.id }}" *ngFor="let c of suppliers$">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">{{
                    c.supplier_name
                  }}</font>
                </font>
              </option>
            </select>
            <!---->
            <div
              *ngIf="submitted && f.supplier_id.errors"
              class="alert alert-danger"
            >
              <div *ngIf="submitted && f.supplier_id.errors.required">
                {{ msg.validations.supplier_id }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="expense_paymentType" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Type of payment </font>
            </font>
          </label>
          <div class="col-sm-8">
            <select
              [ngClass]="{
                'is-invalid': submitted && f.expense_paymentType.errors
              }"
              formControlName="expense_paymentType"
              name="expense_paymentType"
              id="expense_paymentType"
              class="form-control"
            >
              <option value="">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Select</font>
                </font>
              </option>
              <option>
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Cash</font>
                </font>
              </option>
              <option>
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Credit Card</font>
                </font>
              </option>
            </select>
            <!---->
            <div
              *ngIf="submitted && f.expense_paymentType.errors"
              class="alert alert-danger"
            >
              <div *ngIf="submitted && f.expense_paymentType.errors.required">
                {{ msg.validations.expense_paymentType }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="expense_paymentAccount" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Account </font>
            </font>
          </label>
          <div class="col-sm-8">
            <select
              [ngClass]="{
                'is-invalid': submitted && f.expense_paymentAccount.errors
              }"
              formControlName="expense_paymentAccount"
              name="expense_paymentAccount"
              id="expense_paymentAccount"
              class="form-control"
            >
              <option value="">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Select</font>
                </font>
              </option>
              <option>
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Utility</font>
                </font>
              </option>
              <option>
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Service</font>
                </font>
              </option>
              <option>
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Product</font>
                </font>
              </option>
            </select>
            <!---->
            <div
              *ngIf="submitted && f.expense_paymentAccount.errors"
              class="alert alert-danger"
            >
              <div *ngIf="submitted && f.expense_paymentAccount.errors.required">
                {{ msg.validations.expense_paymentAccount }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="expense_amount" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Amount </font> </font
            ><i
              aria-hidden="true"
              data-toggle="tooltip"
              data-placement="top"
              title=""
              class="fa fa-asterisk text-danger require"
              data-original-title="Required"
            ></i>
          </label>
          <div class="col-sm-8">
            <input
              type="number"
              min="0"
              max="10000000"
              step="any"
              [ngClass]="{ 'is-invalid': submitted && f.expense_amount.errors }"
              formControlName="expense_amount"
              name="expense_amount"
              id="expense_amount"
              placeholder="Montant"
              class="form-control"
            />
            <!---->
            <div
              *ngIf="submitted && f.expense_amount.errors"
              class="alert alert-danger"
            >
              <div *ngIf="submitted && f.expense_amount.errors.required">
                {{ msg.validations.expense_amount }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="expense_details" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Details </font>
            </font>
          </label>
          <div class="col-sm-8">
            <textarea
              id="expense_details"
              [ngClass]="{ 'is-invalid': submitted && f.expense_details.errors }"
              formControlName="expense_details"
              name="expense_details"
              rows="5"
              placeholder="Entrer ..."
              class="form-control"
            ></textarea>
            <div
              *ngIf="submitted && f.expense_details.errors"
              class="alert alert-danger"
            >
              <div *ngIf="submitted && f.expense_details.errors.required">
                {{ msg.validations.expense_details }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <button (click)="add()" type="button" class="btn btn-info">
            <i class="fas fa-save"></i>
            Save
          </button>
          <button (click)="reset()" type="button" class="btn btn-danger">
            <i class="fas fa-times"></i>
            Cancel
          </button>
        </div>
      </div>
      <div class="col-sm-6"></div>
    </div>
  </form>


  import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import ExpenseMessage from 'src/app/main/messages/ExpenseMessage';
import Supplier from 'src/app/main/models/Supplier';
import { HTTPService } from 'src/app/main/services/HTTPService';
import ExpenseValidation from 'src/app/main/validations/ExpenseValidation';
import ExpenseTestService from 'src/app/main/mocks/ExpenseTestService';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent extends URLLoader implements OnInit {

  expenseForm: FormGroup
  msg: ExpenseMessage
  submitted = false
  suppliers$:Supplier[]=[]

  get f() { return this.expenseForm.controls; }

  constructor(private httpService:HTTPService,
    private validation: ExpenseValidation, 
    private message: ExpenseMessage,
    private ExpenseTestService: ExpenseTestService) {
    super()
    this.expenseForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
    this.getAllSuppliers()
  }

  reset() {
    this.expenseForm.reset()
  }

  add() {
    this.submitted = true;
    this.expenseForm.value.supplier_id=this.suppliers$.filter(x => 
    x.id == parseInt(this.expenseForm.value.supplier_id))[0]
  
   if (this.validation.checkValidation()) {
     this.httpService.create(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/expense/create",this.expenseForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')
      window.location.reload();
    }
  }

    getAllSuppliers() {
     this.httpService.getAll(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/supplier/all")
     .subscribe((data:object)=>{
       this.suppliers$=data as Supplier[];
      
     })
  }

}
