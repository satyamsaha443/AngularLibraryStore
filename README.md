Error: src/app/main/interfaces/Service.ts:3:5 - error TS7010: 'get', which lacks return-type annotation, implicitly has an 'any' return type.

3     get(id)
      ~~~~~~~


Error: src/app/main/interfaces/Service.ts:3:9 - error TS7006: Parameter 'id' implicitly has an 'any' type.        

3     get(id)
          ~~


Error: src/app/main/interfaces/Service.ts:4:5 - error TS7010: 'create', which lacks return-type annotation, implicitly has an 'any' return type.

4     create(data)
      ~~~~~~~~~~~~


Error: src/app/main/interfaces/Service.ts:4:12 - error TS7006: Parameter 'data' implicitly has an 'any' type.     

4     create(data)
             ~~~~


Error: src/app/main/interfaces/Service.ts:5:5 - error TS7010: 'update', which lacks return-type annotation, implicitly has an 'any' return type.

5     update(old, data)
      ~~~~~~~~~~~~~~~~~


Error: src/app/main/interfaces/Service.ts:5:12 - error TS7006: Parameter 'old' implicitly has an 'any' type.      

5     update(old, data)
             ~~~


Error: src/app/main/interfaces/Service.ts:5:17 - error TS7006: Parameter 'data' implicitly has an 'any' type.     

5     update(old, data)
                  ~~~~


Error: src/app/main/interfaces/Service.ts:6:5 - error TS7010: 'remove', which lacks return-type annotation, implicitly has an 'any' return type.

6     remove(id)
      ~~~~~~~~~~


Error: src/app/main/interfaces/Service.ts:6:12 - error TS7006: Parameter 'id' implicitly has an 'any' type.       

6     remove(id)
             ~~


Error: src/app/main/mocks/ExpenseTestService.ts:9:45 - error TS2345: Argument of type 'null' is not assignable to 
parameter of type 'string'.

9     public ID = new BehaviorSubject<string>(null);
                                              ~~~~


Error: src/app/main/mocks/ProductTestService.ts:10:45 - error TS2345: Argument of type 'null' is not assignable to parameter of type 'string'.

10     public ID = new BehaviorSubject<string>(null);
                                               ~~~~




× Failed to compile.


export default interface Service {
    getAll():any
    get(id)
    create(data)
    update(old, data)
    remove(id)
}

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";


@Injectable({
    providedIn: 'root'
})
export default class EmployeeTestService implements Service {
    create(data: any) {
        throw new Error("Method not implemented.");
    }
    update(old: any, data: any) {
        throw new Error("Method not implemented.");
    }
    public ID = new BehaviorSubject<string>(null);
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

    public get(id: number) {
        return EmployeeTestService._employee.find(item => item.id === id);
    };

    // public create(data) {
    //     data["id"] = EmployeeTestService.id
    //     EmployeeTestService._employee.push(data);
    //     EmployeeTestService.id++
    //     console.log(data)
    // };

    // public update(data) {

    //     var foundIndex = EmployeeTestService._employee.findIndex(item => item.id === data.id);
    //     EmployeeTestService._employee[foundIndex] = data;
    // };

    public remove(id: number) {
        EmployeeTestService._employee.splice(id, 1);
    };


}
