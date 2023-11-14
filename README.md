import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class EmployeeTestService implements Service {
    public ID = new BehaviorSubject<string | null>(null);
    static _employee = [{
        "id": 1,
        "employee_fname": "Eglantine Deschênes",
        "employee_email": "EglantineDeschenes@teleworm.us",
        "employee_phone": "01.50.38.11.50",
        "employee_gender": "string",
        "employee_nid": "string",
        "status_id": "active",
        "employee_birthday": "string",
        "employee_address": "84, Quai des Belges 77100 MEAUX",
        "employee_salary": "33.000"
    }]



    static id = 0

    public getAll() {
        return EmployeeTestService._employee;
    }

    public get(id:any) {
        return EmployeeTestService._employee.find(item => item.id === id);
    };

    public create(data:any) {
        data["id"] = EmployeeTestService.id
        EmployeeTestService._employee.push(data);
        EmployeeTestService.id++
        console.log(data)
    };

    public update(data:any) {

        var foundIndex = EmployeeTestService._employee.findIndex(item => item.id === data.id);
        EmployeeTestService._employee[foundIndex] = data;
    };

    public remove(id:any) {
        EmployeeTestService._employee.splice(id, 1);
    };


}


import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import EmployeeMessage from 'src/app/main/messages/EmployeeMessage';
import EmployeeTestService from 'src/app/main/mocks/EmployeeTestService';
import Employee from 'src/app/main/models/Employee';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent extends URLLoader implements OnInit {

  model : Employee


  constructor(private employeeTestService: EmployeeTestService,
    private message: EmployeeMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Employee(0, '', '', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.employeeTestService.ID.subscribe(idd =&gt; {

      this.model = this.employeeTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.employeeTestService.update(this.model)
    super.show('Confirmation', this.message.confirmations.edit, 'success')
  }

}

Error: src/app/modules/employee/edit-employee/edit-employee.component.ts:33:7 - error TS2322: Type '{ id: number; 
employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; } | undefined' is not assignable to type 'Employee'.
  Type 'undefined' is not assignable to type 'Employee'.

33       this.model = this.employeeTestService.get(parseInt(idd))
         ~~~~~~~~~~


Error: src/app/modules/employee/edit-employee/edit-employee.component.ts:33:58 - error TS2345: Argument of type 'string | null' is not assignable to parameter of type 'string'.
  Type 'null' is not assignable to type 'string'.

33       this.model = this.employeeTestService.get(parseInt(idd))
                                                            ~~~




× Failed to compile.
