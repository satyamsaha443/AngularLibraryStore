# AngularTask4

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

