<form class="form-horizontal" [formGroup]="employeeForm">
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label for="name" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Name </font> </font
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
              type="text"
              [ngClass]="{ 'is-invalid': submitted && f.name.errors }"
              formControlName="name"
              name="name"
              id="name"
              placeholder="Nom de l'employé"
              class="form-control"
            />
            <!---->
            <div *ngIf="submitted && f.name.errors" class="alert alert-danger">
              <div *ngIf="submitted && f.name.errors.required">
                {{ msg.validations.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit">
                Courriel des employés
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
            <input
              type="email"
              [ngClass]="{ 'is-invalid': submitted && f.email.errors }"
              formControlName="email"
              name="email"
              id="email"
              placeholder="Courriel des employés"
              class="form-control"
            />
            <!---->
            <div *ngIf="submitted && f.email.errors" class="alert alert-danger">
              <div *ngIf="submitted && f.email.errors.required">
                {{ msg.validations.email }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="phone" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit">
                Téléphone de l'employé
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
            <input
              type="tel"
              [ngClass]="{ 'is-invalid': submitted && f.phone.errors }"
              formControlName="phone"
              name="phone"
              id="phone"
              placeholder="Téléphone de l'employé"
              class="form-control"
            />
            <!---->
            <div *ngIf="submitted && f.phone.errors" class="alert alert-danger">
              <div *ngIf="submitted && f.phone.errors.required">
                {{ msg.validations.phone }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="gender" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Le sexe </font> </font
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
              type="text"
              [ngClass]="{ 'is-invalid': submitted && f.gender.errors }"
              formControlName="gender"
              name="gender"
              id="gender"
              class="form-control"
            >
              <option value="">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit"
                    >Sélectionnez le sexe</font
                  >
                </font>
              </option>
              <option>
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Masculin</font>
                </font>
              </option>
              <option>
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Femme</font>
                </font>
              </option>
            </select>
            <!---->
            <div *ngIf="submitted && f.gender.errors" class="alert alert-danger">
              <div *ngIf="submitted && f.gender.errors.required">
                {{ msg.validations.gender }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="nid" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit">
                carte d'identité
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
            <input
              type="text"
              [ngClass]="{ 'is-invalid': submitted && f.nid.errors }"
              formControlName="nid"
              name="nid"
              id="nid"
              placeholder="NID"
              class="form-control"
            />
            <!---->
            <div *ngIf="submitted && f.nid.errors" class="alert alert-danger">
              <div *ngIf="submitted && f.nid.errors.required">
                {{ msg.validations.nid }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label for="status" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Statut </font> </font
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
              type="text"
              id="status"
              [ngClass]="{ 'is-invalid': submitted && f.status.errors }"
              formControlName="status"
              name="status"
              class="form-control"
            >
              <option value="">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit"
                    >Sélectionnez le statut</font
                  >
                </font>
              </option>
              <option value="inactive">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">Inactif</font>
                </font>
              </option>
              <option value="active">
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">active</font>
                </font>
              </option>
            </select>
            <!---->
            <div *ngIf="submitted && f.status.errors" class="alert alert-danger">
              <div *ngIf="submitted && f.status.errors.required">
                {{ msg.validations.status }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="birthday" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Date de naissance </font>
            </font>
          </label>
          <div class="col-sm-8">
            <input
              type="date"
              [ngClass]="{
                'is-invalid': submitted && f.birthday.errors
              }"
              formControlName="birthday"
              name="birthday"
              id="birthday"
              placeholder="AAAA-MM-JJ"
              class="form-control"
            />
            <!---->
            <div
              *ngIf="submitted && f.birthday.errors"
              class="alert alert-danger"
            >
              <div *ngIf="submitted && f.birthday.errors.required">
                {{ msg.validations.birthday }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="address" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Adresse de l'employé </font>
            </font>
          </label>
          <div class="col-sm-8">
            <textarea
              id="address"
              [ngClass]="{ 'is-invalid': submitted && f.address.errors }"
              formControlName="address"
              name="address"
              rows="3"
              placeholder="Entrer ..."
              class="form-control"
            ></textarea>
            <div *ngIf="submitted && f.address.errors" class="alert alert-danger">
              <div *ngIf="submitted && f.address.errors.required">
                {{ msg.validations.address }}
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="salary" class="col-sm-4 control-label">
            <font style="vertical-align: inherit">
              <font style="vertical-align: inherit"> Un salaire </font>
            </font>
          </label>
          <div class="col-sm-8">
            <input
              type="number"
              step="any"
              [ngClass]="{ 'is-invalid': submitted && f.salary.errors }"
              formControlName="salary"
              name="salary"
              id="salary"
              placeholder="Un salaire"
              class="form-control"
            />
            <!---->
            <div *ngIf="submitted && f.salary.errors" class="alert alert-danger">
              <div *ngIf="submitted && f.salary.errors.required">
                {{ msg.validations.salary }}
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
import EmployeeMessage from 'src/app/main/messages/EmployeeMessage';
import EmployeeTestService from 'src/app/main/mocks/EmployeeTestService';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import EmployeeValidation from 'src/app/main/validations/EmployeeValidation';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent extends URLLoader implements OnInit {

  employeeForm: FormGroup
  msg: EmployeeMessage
  submitted = false

  

  get f() { return this.employeeForm.controls; }

  constructor(private httpService:HTTPService,
    private validation: EmployeeValidation, 
    private message: EmployeeMessage,
    private ExpenseTestService: EmployeeTestService) {
    super()
    this.employeeForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.employeeForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.httpService.create(URLS.URL_BASE+URLS.URL_PORT+"/stockbay/employee/create",this.employeeForm.value)
      super.show('Confirmation', this.msg.confirmations.add, 'success')
     window.location.reload();
    }
  }

}

Build at: 2023-11-14T08:28:20.352Z - Hash: f9a795e449056dad - Time: 359ms

Error: src/app/modules/employee/add-employee/add-employee.component.html:20:57 - error TS4111: Property 'name' comes from an index signature, so it must be accessed with ['name'].

20               [ngClass]="{ 'is-invalid': submitted && f.name.errors }"
                                                           ~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:28:40 - error TS4111: Property 'name' comes from an index signature, so it must be accessed with ['name'].

28             <div *ngIf="submitted && f.name.errors" class="alert alert-danger">
                                          ~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:29:42 - error TS4111: Property 'name' comes from an index signature, so it must be accessed with ['name'].

29               <div *ngIf="submitted && f.name.errors.required">
                                            ~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:29:54 - error TS4111: Property 'required' comes from an index signature, so it must be accessed with ['required'].

29               <div *ngIf="submitted && f.name.errors.required">
                                                        ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:30:36 - error TS2339: Property 'name' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

30                 {{ msg.validations.name }}
                                      ~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:53:57 - error TS4111: Property 'email' comes from an index signature, so it must be accessed with ['email'].

53               [ngClass]="{ 'is-invalid': submitted && f.email.errors }"
                                                           ~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:61:40 - error TS4111: Property 'email' comes from an index signature, so it must be accessed with ['email'].

61             <div *ngIf="submitted && f.email.errors" class="alert alert-danger">
                                          ~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:62:42 - error TS4111: Property 'email' comes from an index signature, so it must be accessed with ['email'].

62               <div *ngIf="submitted && f.email.errors.required">
                                            ~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:62:55 - error TS4111: Property 'required' comes from an index signature, so it must be accessed with ['required'].

62               <div *ngIf="submitted && f.email.errors.required">
                                                         ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:63:36 - error TS2339: Property 'email' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

63                 {{ msg.validations.email }}
                                      ~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:86:57 - error TS4111: Property 'phone' comes from an index signature, so it must be accessed with ['phone'].

86               [ngClass]="{ 'is-invalid': submitted && f.phone.errors }"
                                                           ~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:94:40 - error TS4111: Property 'phone' comes from an index signature, so it must be accessed with ['phone'].

94             <div *ngIf="submitted && f.phone.errors" class="alert alert-danger">
                                          ~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:95:42 - error TS4111: Property 'phone' comes from an index signature, so it must be accessed with ['phone'].

95               <div *ngIf="submitted && f.phone.errors.required">
                                            ~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:95:55 - error TS4111: Property 'required' comes from an index signature, so it must be accessed with ['required'].

95               <div *ngIf="submitted && f.phone.errors.required">
                                                         ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:96:36 - error TS2339: Property 'phone' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

96                 {{ msg.validations.phone }}
                                      ~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:117:57 - error TS4111: Property 'gender' 
comes from an index signature, so it must be accessed with ['gender'].

117               [ngClass]="{ 'is-invalid': submitted && f.gender.errors }"
                                                            ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:142:40 - error TS4111: Property 'gender' 
comes from an index signature, so it must be accessed with ['gender'].

142             <div *ngIf="submitted && f.gender.errors" class="alert alert-danger">
                                           ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:143:42 - error TS4111: Property 'gender' 
comes from an index signature, so it must be accessed with ['gender'].

143               <div *ngIf="submitted && f.gender.errors.required">
                                             ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:143:56 - error TS4111: Property 'required' comes from an index signature, so it must be accessed with ['required'].

143               <div *ngIf="submitted && f.gender.errors.required">
                                                           ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:144:36 - error TS2339: Property 'gender' 
does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

144                 {{ msg.validations.gender }}
                                       ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:167:57 - error TS4111: Property 'nid' comes from an index signature, so it must be accessed with ['nid'].

167               [ngClass]="{ 'is-invalid': submitted && f.nid.errors }"
                                                            ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:175:40 - error TS4111: Property 'nid' comes from an index signature, so it must be accessed with ['nid'].

175             <div *ngIf="submitted && f.nid.errors" class="alert alert-danger">
                                           ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:176:42 - error TS4111: Property 'nid' comes from an index signature, so it must be accessed with ['nid'].

176               <div *ngIf="submitted && f.nid.errors.required">
                                             ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:176:53 - error TS4111: Property 'required' comes from an index signature, so it must be accessed with ['required'].

176               <div *ngIf="submitted && f.nid.errors.required">
                                                        ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:177:36 - error TS2339: Property 'nid' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

177                 {{ msg.validations.nid }}
                                       ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:201:57 - error TS4111: Property 'status' 
comes from an index signature, so it must be accessed with ['status'].

201               [ngClass]="{ 'is-invalid': submitted && f.status.errors }"
                                                            ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:225:40 - error TS4111: Property 'status' 
comes from an index signature, so it must be accessed with ['status'].

225             <div *ngIf="submitted && f.status.errors" class="alert alert-danger">
                                           ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:226:42 - error TS4111: Property 'status' 
comes from an index signature, so it must be accessed with ['status'].

226               <div *ngIf="submitted && f.status.errors.required">
                                             ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:226:56 - error TS4111: Property 'required' comes from an index signature, so it must be accessed with ['required'].

226               <div *ngIf="submitted && f.status.errors.required">
                                                           ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:227:36 - error TS2339: Property 'status' 
does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

227                 {{ msg.validations.status }}
                                       ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:242:46 - error TS4111: Property 'birthday' comes from an index signature, so it must be accessed with ['birthday'].

242                 'is-invalid': submitted && f.birthday.errors
                                                 ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:252:37 - error TS4111: Property 'birthday' comes from an index signature, so it must be accessed with ['birthday'].

252               *ngIf="submitted && f.birthday.errors"
                                        ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:255:42 - error TS4111: Property 'birthday' comes from an index signature, so it must be accessed with ['birthday'].

255               <div *ngIf="submitted && f.birthday.errors.required">
                                             ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:255:58 - error TS4111: Property 'required' comes from an index signature, so it must be accessed with ['required'].

255               <div *ngIf="submitted && f.birthday.errors.required">
                                                             ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:256:36 - error TS2339: Property 'birthday' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

256                 {{ msg.validations.birthday }}
                                       ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:270:57 - error TS4111: Property 'address' comes from an index signature, so it must be accessed with ['address'].

270               [ngClass]="{ 'is-invalid': submitted && f.address.errors }"
                                                            ~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:277:40 - error TS4111: Property 'address' comes from an index signature, so it must be accessed with ['address'].

277             <div *ngIf="submitted && f.address.errors" class="alert alert-danger">
                                           ~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:278:42 - error TS4111: Property 'address' comes from an index signature, so it must be accessed with ['address'].

278               <div *ngIf="submitted && f.address.errors.required">
                                             ~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:278:57 - error TS4111: Property 'required' comes from an index signature, so it must be accessed with ['required'].

278               <div *ngIf="submitted && f.address.errors.required">
                                                            ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:279:36 - error TS2339: Property 'address' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

279                 {{ msg.validations.address }}
                                       ~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:294:57 - error TS4111: Property 'salary' 
comes from an index signature, so it must be accessed with ['salary'].

294               [ngClass]="{ 'is-invalid': submitted && f.salary.errors }"
                                                            ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:302:40 - error TS4111: Property 'salary' 
comes from an index signature, so it must be accessed with ['salary'].

302             <div *ngIf="submitted && f.salary.errors" class="alert alert-danger">
                                           ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:303:42 - error TS4111: Property 'salary' 
comes from an index signature, so it must be accessed with ['salary'].

303               <div *ngIf="submitted && f.salary.errors.required">
                                             ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:303:56 - error TS4111: Property 'required' comes from an index signature, so it must be accessed with ['required'].

303               <div *ngIf="submitted && f.salary.errors.required">
                                                           ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:304:36 - error TS2339: Property 'salary' 
does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

304                 {{ msg.validations.salary }}
                                       ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:12:16
    12   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.




× Failed to compile.
