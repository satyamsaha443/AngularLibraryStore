import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import EmployeeMessage from 'src/app/main/messages/EmployeeMessage';
import { HTTPService } from 'src/app/main/services/HTTPService';
import URLS from 'src/app/main/urls/urls';
import EmployeeValidation from 'src/app/main/validations/EmployeeValidation';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent extends URLLoader implements OnInit {

  employeeForm: FormGroup;
  msg: EmployeeMessage;
  submitted = false;

  get f() { return this.employeeForm.controls; }

  constructor(private httpService: HTTPService,
              private validation: EmployeeValidation, 
              private message: EmployeeMessage) {
    super();
    this.employeeForm = this.validation.formGroupInstance; // Make sure this is correctly initialized
    this.msg = this.message;
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  reset() {
    this.employeeForm.reset();
  }

  add() {
    this.submitted = true;

    if (this.employeeForm.valid) { // Check if form is valid
      this.httpService.create(URLS.URL_BASE + URLS.URL_PORT + "/stockbay/employee/create", this.employeeForm.value)
        .then(() => {
          super.show('Confirmation', this.msg.confirmations.add, 'success');
          window.location.reload();
        })
        .catch(error => {
          // Handle errors here
        });
    }
  }
}
