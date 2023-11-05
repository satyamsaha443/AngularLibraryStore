<div>
  <div class="d-sm-flex align-items-center justify-content-between mt-4">
    <h1 class="h3 mb-0 text-gray-800">Student List</h1>
  
    <!-- Add a button with the "modal-trigger" class -->
    <button class="btn modal-trigger" (click)="openAddStudentDialog()">
      <i class="material-icons">add</i> Add Student
    </button>
  
    <!-- Add a modal dialog box for Add Student form -->
    <div id="add-student-form" class="modal">
      <div class="modal-content">
  
     
    </div>
  
 

   <div class="mat-elevation-z8 mt-4 mb-4">
      <mat-table #table [dataSource]="dataSource" matSort matPaginator>
  
        <ng-container matColumnDef="id">
          <mat-header-cell *matHeaderCellDef>ID</mat-header-cell>
          <mat-cell *matCellDef="let student">{{student.id}}</mat-cell>
        </ng-container>
  
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>
          <mat-cell *matCellDef="let student">{{student.studentName}}</mat-cell>
        </ng-container>
  
        <ng-container matColumnDef="email">
          <mat-header-cell *matHeaderCellDef>Email</mat-header-cell>
          <mat-cell *matCellDef="let student">{{student.studentEmail}}</mat-cell>
        </ng-container>
  
        <ng-container matColumnDef="phone">
          <mat-header-cell *matHeaderCellDef>Phone</mat-header-cell>
          <mat-cell *matCellDef="let student">{{student.phoneNumber}}</mat-cell>
        </ng-container>
  
        <ng-container matColumnDef="action">
          <mat-header-cell *matHeaderCellDef>Action</mat-header-cell>
          <mat-cell *matCellDef="let student">
            <button [routerLink]="['/showattendance',student.id]" mat-icon-button color="primary" class="btn-margin">
              <mat-icon>visibility</mat-icon>
            </button>
            <button [routerLink]="['/editdatastudent',student.id]" mat-icon-button color="primary" class="btn-margin">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button color="warn" class="btn-margin" (click)="deleteStudent(student.id)">
              <mat-icon>delete</mat-icon>
            </button>
          </mat-cell>
        </ng-container>
  
        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
      </mat-table>

      <mat-paginator [pageSize]="3" [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>

    </div>
  
  </div>
</div>



import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StudentService } from '../student/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IStudent } from '../model';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddStudentComponent } from '../add-student/add-student.component';
//import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'action'];
  dataSource: MatTableDataSource<IStudent>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  studentForm: FormGroup;
  

  

  constructor(private studentService: StudentService, private dialog: MatDialog,  private router: Router) {
    this.dataSource = new MatTableDataSource<IStudent>();
    this.dataSource.paginator = this.paginator;
    this.studentForm= new FormGroup({
      'studentName': new FormControl('', Validators.required),
      'studentEmail': new FormControl('', [Validators.required, Validators.email]),
      'phoneNumber': new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
    })
   
    }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void { this.studentService.getAllStudents().subscribe((students:IStudent[]) => 
    { this.dataSource.data = students; 
    });
   }

  deleteStudent(id: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this student?');

    if (confirmed) {
      this.studentService.deleteStudentById(id).subscribe(() => {
        this.getAllStudents();
      });
      }

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.studentService.deleteStudentById(id).subscribe(() => {
    //       this.getStudentList();
    //     });
    //   }
    // });
  }

  openAddStudentDialog(): void{
    const dialogRef = this.dialog.open(AddStudentComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('The dialog was closed', result);
      }
    });
  }

  submitStudent(){
    Object.keys(this.studentForm.controls).forEach(field =>{
      const control = this.studentForm.get(field);
      if (control instanceof FormControl){
      control.markAsTouched({onlySelf: true});
    }
    // if(this.studentForm.valid){
    //   this.dialogRef.close(this.studentForm.value);
    // }
    });

    if(this.studentForm.valid){
      this.studentService.saveStudent(this.studentForm.value).subscribe(()=>{
        this.router.navigate(['/dashboard'])
      },()=>{
        alert("please try again later");
      })

    }

  }
}





<div class="card shadow mb-4">
  <div class="card-header py-3">
    <h1 class="m-0 font-weight-bold mat-title text-primary text-center">Student {{ id }} Attendance</h1>
  </div>

  <div class="card-body">
    <div class="table-responsive">
      <table mat-table [dataSource]="attendance" class="mat-elevation-z8">

        <ng-container matColumnDef="date">
          <th mat-header-cell *matHeaderCellDef>Date</th>
          <td mat-cell *matCellDef="let att">{{ att.date | date }}</td>
        </ng-container>

        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef>Status</th>
          <td mat-cell *matCellDef="let att">
            <span *ngIf="att.present">Present</span>
            <span *ngIf="!att.present">Absent</span>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
  </div>

  <div class="card-footer">
    <button mat-button color="warn" routerLink="/dashboard">Back</button>
  </div>
</div>


import { StudentService } from './../student/student.service';
import { Component, OnInit } from '@angular/core';
import { IAttendance } from '../model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-show-attendance',
  templateUrl: './show-attendance.component.html',
  styleUrls: ['./show-attendance.component.scss']
})
export class ShowAttendanceComponent {
  displayedColumns: string[] = ['date', 'status'];

  attendance: Array<IAttendance>=[]
  attendanceId: Array<IAttendance>=[]
  id:number = 0;

  constructor(private activeRouter:ActivatedRoute, private studentService:StudentService){

  }
  // ngOnInit(): void{
  //   this.activeRouter.params.subscribe((paramsData) => {
  //     this.id = paramsData['id'];
  //     this.studentService.searchAttendance().subscribe((data) =>
  //     {
  //       this.attendance= data
  //       for(let i=0;i<this.attendance.length; i++){
  //         if(this.attendance[i].studentId===this.id){
  //           this.attendanceId.push(this.attendance[i])
  //         }
  //       }
  //     })
  //   })
  // }

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      this.id = params['id'];
      this.fetchAttendance();
    });
  }

  fetchAttendance(): void {
    this.studentService.searchAttendance().subscribe((data) => {
      this.attendance = data.filter((att) => att.studentId === this.id);
    });
  }


}
