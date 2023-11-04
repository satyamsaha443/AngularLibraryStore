<div>
  <div class="d-sm-flex align-items-center justify-content-between mt-4">
    <h1 class="h3 mb-0 text-gray-800">Student List</h1>
  
    <!-- Add a button with the "modal-trigger" class -->
    <button class="btn modal-trigger" data-target="add-student-form">
      <i class="material-icons">add</i> Add Student
    </button>
  
    <!-- Add a modal dialog box for Add Student form -->
    <div id="add-student-form" class="modal">
      <div class="modal-content">
  
        <!-- Add a Material UI form to match your existing code -->
        <mat-card>
          <mat-card-content>
            <form [formGroup]="studentForm">
              <mat-form-field>
                <input matInput formControlName="studentName" placeholder="Student Name" required>
                <mat-error *ngIf="studentForm.get('studentName').invalid">{{ getErrorMessage('studentName') }}</mat-error>
              </mat-form-field>
              <mat-form-field>
                <input matInput formControlName="studentEmail" placeholder="Email" required>
                <mat-error *ngIf="studentForm.get('studentEmail').invalid">{{ getErrorMessage('studentEmail') }}</mat-error>
              </mat-form-field>
              <mat-form-field>
                <input matInput formControlName="phoneNumber" placeholder="Phone Number" required>
                <mat-error *ngIf="studentForm.get('phoneNumber').invalid">{{ getErrorMessage('phoneNumber') }}</mat-error>
              </mat-form-field>
            </form>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary" (click)="submitStudent()" [disabled]="!studentForm.valid">Submit</button>
            <button mat-raised-button (click)="closeModal()">Cancel</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  
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






  import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StudentService } from '../student/student.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IStudent } from '../model';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  

  constructor(private studentService: StudentService, private dialog: MatDialog,  private router: Router) {
    this.dataSource = new MatTableDataSource<IStudent>();
    this.dataSource.paginator = this.paginator;
   
    }
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

