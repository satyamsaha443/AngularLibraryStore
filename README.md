Build at: 2023-11-14T08:40:19.566Z - Hash: af6e86aab3b2316b - Time: 499ms

Error: src/app/modules/employee/add-employee/add-employee.component.html:9:69 - error TS2349: This expression is not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

9                            [ngClass]="{'is-invalid': submitted && f.get('name')?.errors}"
                                                                      ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:9:69 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

9                            [ngClass]="{'is-invalid': submitted && f.get('name')?.errors}"
                                                                      ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:11:48 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

11                     <div *ngIf="submitted && f.get('name')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:11:48 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

11                     <div *ngIf="submitted && f.get('name')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:12:39 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

12                         <div *ngIf="f.get('name')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:12:39 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

12                         <div *ngIf="f.get('name')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:13:48 - error TS2339: Property 'name' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

13                             {{ msg.validations.name }}
                                                  ~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:24:69 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

24                            [ngClass]="{'is-invalid': submitted && f.get('email')?.errors}"
                                                                       ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:24:69 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

24                            [ngClass]="{'is-invalid': submitted && f.get('email')?.errors}"
                                                                       ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:26:48 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

26                     <div *ngIf="submitted && f.get('email')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:26:48 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

26                     <div *ngIf="submitted && f.get('email')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:27:39 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

27                         <div *ngIf="f.get('email')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:27:39 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

27                         <div *ngIf="f.get('email')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:28:48 - error TS2339: Property 'email' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

28                             {{ msg.validations.email }}
                                                  ~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:39:69 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

39                            [ngClass]="{'is-invalid': submitted && f.get('phone')?.errors}"
                                                                       ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:39:69 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

39                            [ngClass]="{'is-invalid': submitted && f.get('phone')?.errors}"
                                                                       ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:41:48 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

41                     <div *ngIf="submitted && f.get('phone')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:41:48 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

41                     <div *ngIf="submitted && f.get('phone')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:42:39 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

42                         <div *ngIf="f.get('phone')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:42:39 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

42                         <div *ngIf="f.get('phone')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:43:48 - error TS2339: Property 'phone' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

43                             {{ msg.validations.phone }}
                                                  ~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:54:70 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

54                             [ngClass]="{'is-invalid': submitted && f.get('gender')?.errors}">
                                                                        ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:54:70 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

54                             [ngClass]="{'is-invalid': submitted && f.get('gender')?.errors}">
                                                                        ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:59:48 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

59                     <div *ngIf="submitted && f.get('gender')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:59:48 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

59                     <div *ngIf="submitted && f.get('gender')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:60:39 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

60                         <div *ngIf="f.get('gender')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:60:39 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

60                         <div *ngIf="f.get('gender')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:61:48 - error TS2339: Property 'gender' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: 
string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

61                             {{ msg.validations.gender }}
                                                  ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:72:69 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

72                            [ngClass]="{'is-invalid': submitted && f.get('nid')?.errors}"
                                                                       ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:72:69 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

72                            [ngClass]="{'is-invalid': submitted && f.get('nid')?.errors}"
                                                                       ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:74:48 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

74                     <div *ngIf="submitted && f.get('nid')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:74:48 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

74                     <div *ngIf="submitted && f.get('nid')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:75:39 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

75                         <div *ngIf="f.get('nid')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:75:39 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

75                         <div *ngIf="f.get('nid')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:76:48 - error TS2339: Property 'nid' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

76                             {{ msg.validations.nid }}
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:88:70 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

88                             [ngClass]="{'is-invalid': submitted && f.get('status')?.errors}">
                                                                        ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:88:70 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

88                             [ngClass]="{'is-invalid': submitted && f.get('status')?.errors}">
                                                                        ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:93:48 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

93                     <div *ngIf="submitted && f.get('status')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:93:48 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

93                     <div *ngIf="submitted && f.get('status')?.errors" class="alert alert-danger">
                                                  ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:94:39 - error TS2349: This expression is 
not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

94                         <div *ngIf="f.get('status')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:94:39 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

94                         <div *ngIf="f.get('status')?.errors?.required">
                                         ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:95:48 - error TS2339: Property 'status' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: 
string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

95                             {{ msg.validations.status }}
                                                  ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:106:69 - error TS2349: This expression is not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

106                            [ngClass]="{'is-invalid': submitted && f.get('birthday')?.errors}"
                                                                        ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:106:69 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

106                            [ngClass]="{'is-invalid': submitted && f.get('birthday')?.errors}"
                                                                        ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:108:48 - error TS2349: This expression is not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

108                     <div *ngIf="submitted && f.get('birthday')?.errors" class="alert alert-danger">
                                                   ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:108:48 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

108                     <div *ngIf="submitted && f.get('birthday')?.errors" class="alert alert-danger">
                                                   ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:109:39 - error TS2349: This expression is not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

109                         <div *ngIf="f.get('birthday')?.errors?.required">
                                          ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:109:39 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

109                         <div *ngIf="f.get('birthday')?.errors?.required">
                                          ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:110:48 - error TS2339: Property 'birthday' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

110                             {{ msg.validations.birthday }}
                                                   ~~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:121:72 - error TS2349: This expression is not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

121                               [ngClass]="{'is-invalid': submitted && f.get('address')?.errors}"
                                                                           ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:121:72 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

121                               [ngClass]="{'is-invalid': submitted && f.get('address')?.errors}"
                                                                           ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:123:48 - error TS2349: This expression is not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

123                     <div *ngIf="submitted && f.get('address')?.errors" class="alert alert-danger">
                                                   ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:123:48 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

123                     <div *ngIf="submitted && f.get('address')?.errors" class="alert alert-danger">
                                                   ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:124:39 - error TS2349: This expression is not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

124                         <div *ngIf="f.get('address')?.errors?.required">
                                          ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:124:39 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

124                         <div *ngIf="f.get('address')?.errors?.required">
                                          ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:125:48 - error TS2339: Property 'address' does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

125                             {{ msg.validations.address }}
                                                   ~~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:136:69 - error TS2349: This expression is not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

136                            [ngClass]="{'is-invalid': submitted && f.get('salary')?.errors}"
                                                                        ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:136:69 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

136                            [ngClass]="{'is-invalid': submitted && f.get('salary')?.errors}"
                                                                        ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:138:48 - error TS2349: This expression is not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

138                     <div *ngIf="submitted && f.get('salary')?.errors" class="alert alert-danger">
                                                   ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:138:48 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

138                     <div *ngIf="submitted && f.get('salary')?.errors" class="alert alert-danger">
                                                   ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:139:39 - error TS2349: This expression is not callable.
  Type 'AbstractControl<any, any>' has no call signatures.

139                         <div *ngIf="f.get('salary')?.errors?.required">
                                          ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:139:39 - error TS4111: Property 'get' comes from an index signature, so it must be accessed with ['get'].

139                         <div *ngIf="f.get('salary')?.errors?.required">
                                          ~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.


Error: src/app/modules/employee/add-employee/add-employee.component.html:140:48 - error TS2339: Property 'salary' 
does not exist on type '{ employee_fname: string; employee_email: string; employee_phone: string; employee_gender: string; employee_nid: string; status_id: string; employee_birthday: string; employee_address: string; employee_salary: string; }'.

140                             {{ msg.validations.salary }}
                                                   ~~~~~~

  src/app/modules/employee/add-employee/add-employee.component.ts:11:16
    11   templateUrl: './add-employee.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddEmployeeComponent.




× Failed to compile.
