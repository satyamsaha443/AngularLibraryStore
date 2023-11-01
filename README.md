# AngularTask4


<mat-toolbar color="primary">
  <button mat-icon-button (click)="sidenav.toggle()">
    <mat-icon>menu</mat-icon>
  </button>
  Student Attendance Dashboard
</mat-toolbar>

<mat-sidenav-container>
  <mat-sidenav #sidenav mode="over">
    <mat-nav-list>
      <a mat-list-item [routerLink]="['/dashboard']" (click)="sidenav.close()">Dashboard</a>
      <a mat-list-item [routerLink]="['/add-student']" (click)="sidenav.close()">Add Student</a>
      <a mat-list-item [routerLink]="['/mark-attendance']" (click)="sidenav.close()">Mark Attendance</a>
      <!-- ... add other navigation links as needed -->
    </mat-nav-list>
  </mat-sidenav>

  <mat-sidenav-content>
    <router-outlet></router-outlet>
  </mat-sidenav-content>

</mat-sidenav-container>

Error: src/app/add-student/add-student.component.html:4:11 - error NG8002: Can't bind to 'formGroup' since it isn't a known property of 'form'.

4     <form [formGroup] ="studentForm" (ngSubmit)="onSubmit()">
            ~~~~~~~~~~~~~~~~~~~~~~~~~~

  src/app/add-student/add-student.component.ts:7:16
    7   templateUrl: './add-student.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddStudentComponent.


Error: src/app/add-student/add-student.component.html:8:51 - error TS2531: Object is possibly 'null'.

8         <mat-error *ngIf="studentForm.get('name').hasError('required')">
                                                    ~~~~~~~~

  src/app/add-student/add-student.component.ts:7:16
    7   templateUrl: './add-student.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddStudentComponent.


Error: src/app/add-student/add-student.component.html:16:52 - error TS2531: Object is possibly 'null'.

16         <mat-error *ngIf="studentForm.get('email').hasError('required')">
                                                      ~~~~~~~~

  src/app/add-student/add-student.component.ts:7:16
    7   templateUrl: './add-student.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddStudentComponent.


Error: src/app/add-student/add-student.component.html:19:52 - error TS2531: Object is possibly 'null'.

19         <mat-error *ngIf="studentForm.get('email').hasError('email')">
                                                      ~~~~~~~~

  src/app/add-student/add-student.component.ts:7:16
    7   templateUrl: './add-student.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddStudentComponent.


Error: src/app/add-student/add-student.component.html:27:52 - error TS2531: Object is possibly 'null'.

27         <mat-error *ngIf="studentForm.get('phone').hasError('required')">
                                                      ~~~~~~~~

  src/app/add-student/add-student.component.ts:7:16
    7   templateUrl: './add-student.component.html',
                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component AddStudentComponent.


Error: src/app/add-student/add-student.component.ts:32:50 - error TS2339: Property 'value' does not exist on type 'Observable<UserDetails[]>'.

32   const students = this.studentService.students$.value;
                                                    ~~~~~


Error: src/app/add-student/add-student.component.ts:33:24 - error TS7006: Parameter 'student' implicitly has an 'any' type.

33   return students.some(student => student.id === id);
                          ~~~~~~~


Error: src/app/add-student/add-student.component.ts:39:13 - error TS2339: Property 'id' does not exist on type 
'Partial<{ name: string | null; email: string | null; phone: string | null; gender: string | null; dateOfBirth: string | null; }>'.

39     student.id = this.generateUniqueId();
               ~~


Error: src/app/add-student/add-student.component.ts:40:36 - error TS2345: Argument of type 'Partial<{ name: string | null; email: string | null; phone: string | null; gender: string | null; dateOfBirth: string | null; }>' 
is not assignable to parameter of type 'UserDetails'.
  Property 'id' is missing in type 'Partial<{ name: string | null; email: string | null; phone: string | null; 
gender: string | null; dateOfBirth: string | null; }>' but required in type 'UserDetails'.

40     this.studentService.addStudent(student);
                                      ~~~~~~~

  src/app/user-details.ts:2:5
    2     id: number;
          ~~
    'id' is declared here.


Error: src/app/dashboard/dashboard.component.html:3:58 - error TS2339: Property 'value' does not exist on type 
'EventTarget'.

3       <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Search by student name">       
                                                           ~~~~~

  src/app/dashboard/dashboard.component.ts:12:16
    12   templateUrl: './dashboard.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component DashboardComponent.


Error: src/app/dashboard/dashboard.component.html:3:58 - error TS2531: Object is possibly 'null'.

3       <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Search by student name">       
                                                           ~~~~~

  src/app/dashboard/dashboard.component.ts:12:16
    12   templateUrl: './dashboard.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component DashboardComponent.


Error: src/app/dashboard/dashboard.component.html:20:39 - error TS2339: Property 'onEdit' does not exist on type 'DashboardComponent'.

20           <button mat-button (click)="onEdit(student)">Edit</button>
                                         ~~~~~~

  src/app/dashboard/dashboard.component.ts:12:16
    12   templateUrl: './dashboard.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component DashboardComponent.


Error: src/app/dashboard/dashboard.component.html:21:39 - error TS2339: Property 'onViewAttendance' does not exist on type 'DashboardComponent'.

21           <button mat-button (click)="onViewAttendance(student)">View Attendance</button>
                                         ~~~~~~~~~~~~~~~~

  src/app/dashboard/dashboard.component.ts:12:16
    12   templateUrl: './dashboard.component.html',
                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Error occurs in the template of component DashboardComponent.





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.





export interface IUserDetails {
  id: number;
  name: string;
  email: string;
  phone: string;
  gender?: string;
  dateOfBirth?: Date;
  attendance?: boolean;
  // other fields...
}


student.service.ts:

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<IUserDetails[]>([]);
  students$ = this.studentsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadStudents(): void {
    this.http.get<IUserDetails[]>('YOUR_API_ENDPOINT').subscribe(data => {
      this.studentsSubject.next(data);
    });
  }

  addStudent(student: IUserDetails): void {
    this.http.post('YOUR_API_ENDPOINT', student).subscribe(data => {
      // Update BehaviorSubject with the new student data...
    });
  }

  // Implement methods for edit, delete, and attendance similarly...
}


dashboard 



import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentService } from '../../core/services/student.service';
import { IUserDetails } from '../../core/interfaces/IUserDetails';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource = new MatTableDataSource<IUserDetails>([]);
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private studentService: StudentService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.studentService.loadStudents();
    this.studentService.students$.subscribe(data => {
      this.dataSource.data = data;
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(student: IUserDetails): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '250px',
      data: { message: 'Do you confirm the deletion of this student?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.studentService.deleteStudent(student.id);
      }
    });
  }

  generateUniqueId(existingIds: number[]): number {
    let uniqueId;
    do {
      uniqueId = Math.floor(100 + Math.random() * 900);
    } while (existingIds.includes(uniqueId));
    return uniqueId;
  }

  // Other methods for editing and attendance...
}






<div>
  <mat-form-field>
    <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Search by student name">
  </mat-form-field>
  
  <mat-table [dataSource]="dataSource" matSort>
  
    <!-- ID Column -->
    <ng-container matColumnDef="id">
      <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>
      <mat-cell *matCellDef="let student">{{ student.id }}</mat-cell>
    </ng-container>
    
    <!-- Other columns... -->

    <!-- Actions Column -->
    <ng-container matColumnDef="action">
      <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>
      <mat-cell *matCellDef="let student">
        <button mat-button (click)="onEdit(student)">Edit</button>
        <button mat-button (click)="onViewAttendance(student)">View Attendance</button>
        <button mat-button (click)="onDelete(student)">Delete</button>
      </mat-cell>
    </ng-container>

    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>

  </mat-table>

  <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
</div>


delete-confirmation.component.ts:


import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html'
})
export class DeleteConfirmationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}



<h2 mat-dialog-title>Delete Confirmation</h2>
<mat-dialog-content>{{ data.message }}</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button [mat-dialog-close]="'cancel'">Cancel</button>
  <button mat-button [mat-dialog-close]="'confirm'">Confirm</button>
</mat-dialog-actions>




<mat-toolbar color="primary">
  <button mat-icon-button (click)="sidenav.toggle()">
    <mat-icon>menu</mat-icon>
  </button>
  Student Attendance Dashboard
</mat-toolbar>

<mat-sidenav-container>
  <mat-sidenav #sidenav mode="over">
    <mat-nav-list>
      <a mat-list-item [routerLink]="['/dashboard']" (click)="sidenav.close()">Dashboard</a>
      <a mat-list-item [routerLink]="['/add-student']" (click)="sidenav.close()">Add Student</a>
      <a mat-list-item [routerLink]="['/mark-attendance']" (click)="sidenav.close()">Mark Attendance</a>
      <!-- ... add other navigation links as needed -->
    </mat-nav-list>
  </mat-sidenav>

  <mat-sidenav-content>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>


add student 



export class AddStudentComponent {
  studentForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    gender: [''],
    dateOfBirth: ['']
  });

  constructor(private fb: FormBuilder, private studentService: StudentService) {}

  onSubmit(): void {
    if (this.studentForm.valid) {
      const student = this.studentForm.value;
      student.id = this.generateUniqueId();
      this.studentService.addStudent(student);
    }
  }

  generateUniqueId(): number {
    // Generate unique ID logic...
  }
}


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsSubject = new BehaviorSubject<IUserDetails[]>([]);
  students$ = this.studentsSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadStudents(): void {
    this.http.get<IUserDetails[]>('YOUR_API_ENDPOINT/students').subscribe(data => {
      this.studentsSubject.next(data);
    });
  }

  addStudent(student: IUserDetails): void {
    this.http.post<IUserDetails>('YOUR_API_ENDPOINT/students', student).subscribe(newStudent => {
      const currentStudents = this.studentsSubject.value;
      this.studentsSubject.next([...currentStudents, newStudent]);
    });
  }

  editStudent(studentId: number, studentData: Partial<IUserDetails>): void {
    this.http.put<IUserDetails>(`YOUR_API_ENDPOINT/students/${studentId}`, studentData).subscribe(updatedStudent => {
      const currentStudents = this.studentsSubject.value;
      const updatedStudentsList = currentStudents.map(student => 
        student.id === studentId ? updatedStudent : student
      );
      this.studentsSubject.next(updatedStudentsList);
    });
  }

  deleteStudent(studentId: number): void {
    this.http.delete(`YOUR_API_ENDPOINT/students/${studentId}`).subscribe(() => {
      const currentStudents = this.studentsSubject.value;
      const updatedStudentsList = currentStudents.filter(student => student.id !== studentId);
      this.studentsSubject.next(updatedStudentsList);
    });
  }

  markAttendance(studentId: number, attendanceData: any): void {
    this.http.post(`YOUR_API_ENDPOINT/students/${studentId}/attendance`, attendanceData).subscribe((attendanceResponse: any) => {
      // You can modify the current students data with the attendance response if needed
      const currentStudents = this.studentsSubject.value;
      const updatedStudentsList = currentStudents.map(student => 
        student.id === studentId ? { ...student, attendance: attendanceResponse } : student
      );
      this.studentsSubject.next(updatedStudentsList);
    });
  }
}



generateUniqueId(): number {
  let id;
  do {
    id = Math.floor(Math.random() * 900) + 100; // This generates a random 3-digit number
  } while (this.isIdDuplicate(id));
  return id;
}

isIdDuplicate(id: number): boolean {
  const students = this.studentService.students$.value;
  return students.some(student => student.id === id);
}


onSubmit(): void {
  if (this.studentForm.valid) {
    const student = this.studentForm.value;
    student.id = this.generateUniqueId();
    this.studentService.addStudent(student);
    this.studentForm.reset(); 
    // Optionally navigate to another route or show feedback...
  }
}



<div class="container">
  <h2>Add Student</h2>

  <form [formGroup]="studentForm" (ngSubmit)="onSubmit()">
    <mat-form-field appearance="fill">
      <mat-label>Name</mat-label>
      <input matInput formControlName="name">
      <mat-error *ngIf="studentForm.get('name').hasError('required')">
        Name is required.
      </mat-error>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Email</mat-label>
      <input matInput formControlName="email" type="email">
      <mat-error *ngIf="studentForm.get('email').hasError('required')">
        Email is required.
      </mat-error>
      <mat-error *ngIf="studentForm.get('email').hasError('email')">
        Please enter a valid email.
      </mat-error>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Phone</mat-label>
      <input matInput formControlName="phone">
      <mat-error *ngIf="studentForm.get('phone').hasError('required')">
        Phone number is required.
      </mat-error>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Gender</mat-label>
      <mat-select formControlName="gender">
        <mat-option value="male">Male</mat-option>
        <mat-option value="female">Female</mat-option>
      </mat-select>
    </mat-form-field>

    <mat-form-field appearance="fill">
      <mat-label>Date of Birth</mat-label>
      <input matInput [matDatepicker]="dobPicker" formControlName="dateOfBirth">
      <mat-datepicker-toggle matSuffix [for]="dobPicker"></mat-datepicker-toggle>
      <mat-datepicker #dobPicker></mat-datepicker>
    </mat-form-field>

    <button mat-raised-button color="primary" type="submit" [disabled]="studentForm.invalid">Add Student</button>
  </form>
</div>



import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IUserDetails } from '../../core/interfaces/IUserDetails';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public student: IUserDetails
  ) {
    this.editForm = this.fb.group({
      id: [student.id, Validators.required],
      name: [student.name, Validators.required],
      email: [student.email, [Validators.required, Validators.email]],
      phone: [student.phone, Validators.required],
      gender: [student.gender],
      dateOfBirth: [student.dateOfBirth]
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.dialogRef.close(this.editForm.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}



import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { StudentService } from '../../core/services/student.service';
import { Attendance } from '../../core/interfaces/Attendance';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  attendance$: Observable<Attendance[]>;

  constructor(
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: { studentId: number }
  ) {
    this.attendance$ = this.studentService.getAttendance(data.studentId);
  }
}



<h2 mat-dialog-title>Attendance Records</h2>
<mat-dialog-content>
  <mat-list>
    <mat-list-item *ngFor="let record of attendance$ | async">
      Date: {{ record.date | date }} - Status: {{ record.status }}
    </mat-list-item>
  </mat-list>
</mat-dialog-content>
<mat-dialog-actions>
  <button mat-button (click)="onNoClick()">Close</button>
</mat-dialog-actions>


<h2 mat-dialog-title>Edit Student</h2>
<form [formGroup]="editForm" (ngSubmit)="onSubmit()">
  <mat-dialog-content>
    <mat-form-field appearance="fill">
      <mat-label>Name</mat-label>
      <input matInput formControlName="name" required>
      <mat-error *ngIf="editForm.get('name').hasError('required')">Name is required</mat-error>
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Email</mat-label>
      <input matInput formControlName="email" required>
      <mat-error *ngIf="editForm.get('email').hasError('required')">Email is required</mat-error>
      <mat-error *ngIf="editForm.get('email').hasError('email')">Enter a valid email</mat-error>
    </mat-form-field>
    <mat-form-field appearance="fill">
      <mat-label>Phone</mat-label>
      <input matInput formControlName="phone" required>
      <mat-error *ngIf="editForm.get('phone').hasError('required')">Phone is required</mat-error>
    </mat-form-field>
    <!-- Add additional fields for gender and date of birth if needed -->
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Cancel</button>
    <button mat-button [disabled]="!editForm.valid" type="submit">Save</button>
  </mat-dialog-actions>
</form>



export interface Attendance {
  id: number;                 // Unique identifier for the attendance record
  studentId: number;          // Identifier for the student
  date: Date;                 // The date of the attendance
  status: 'Present' | 'Absent' | 'Excused' | 'Late'; // Attendance status
  subject: string;            // The subject for which attendance is being recorded
  remarks?: string;           // Optional remarks for the attendance record
}


@Component({
  // ... component metadata ...
})
export class DashboardComponent implements OnInit {
  // ... existing properties and methods ...

  onEdit(student: IUserDetails): void {
    // Assuming you have an EditStudentComponent that takes the current student as data
    const dialogRef = this.dialog.open(EditStudentComponent, {
      width: '250px',
      data: student
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Assume result contains the updated student details
        this.studentService.editStudent(result).subscribe(updatedStudent => {
          // Refresh the table or handle the updated student details
          this.loadStudents(); // You might need to implement this to refresh the data
        });
      }
    });
  }

  onViewAttendance(student: IUserDetails): void {
    // Assuming you have an AttendanceComponent to display the attendance
    this.dialog.open(AttendanceComponent, {
      width: '250px',
      data: { studentId: student.id }
    });

    // If you need to perform actions after viewing attendance, handle it here
    // For example, you could subscribe to an observable that notifies when the attendance view is closed
  }

  private loadStudents(): void {
    this.studentService.loadStudents();
    // Rest of the method...
  }

  // ... rest of your component ...
}

