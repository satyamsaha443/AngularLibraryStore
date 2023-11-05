<div style="text-align: center">

<!-- Import Bootstrap CSS in your head tag -->
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<!-- Create a container to hold your navbar -->
<div class="container-fluid">

  <!-- Start your navbar with the default navbar class 
       and the background color class. -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <!-- Add a brand logo or text with a link to your homepage -->
    <a class="navbar-brand" href="#">Home</a>

    <!-- Add a toggle button for smaller screens  -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNav" aria-controls="navbarNav" 
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Add a container div with a collapse class 
         to hold your navigation links -->
    <div class="collapse navbar-collapse" id="navbarNav">

      <!-- Add a ul list with the nav class and mr-auto to align to the left -->
      <ul class="navbar-nav mr-auto">


      
      

      </ul>

       <!-- Add a search form with a search input, a button and mr-3 class -->
       <form class="form-inline my-2 my-lg-0 mr-3">
         <input matInput (keyup)="applyFilter($event)" placeholder="Search">
       </form>
      
      <!-- Add a div with a dropdown class to
           hold your profile icon and dropdown menu -->
       <div class="dropdown">
          
          <!-- Add a button with a dropdown-toggle class
               and an icon or your profile image -->
          <button class="btn dropdown-toggle" type="button" 
                  id="dropdownMenuButton" data-toggle="dropdown" 
                  aria-haspopup="true" aria-expanded="false">
                  <img src="profile.png" alt="profile" height="30">
          </button>
          
          <!-- Add a ul list with a dropdown-menu class and the right aria-labelledby attribute -->
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Log out</a></li>
          </ul>
       </div>

    </div>
  </nav>
</div>

<!-- Import Bootstrap JS and jQuery in your body tag -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <div class="cards">
        <div class="student-container" *ngFor="let student of dataSource.data">
            <mat-card class="student-card">
              <mat-card-header>
                <div mat-card-avatar></div>
                <mat-card-title>{{student.studentName}}</mat-card-title>
                <mat-card-subtitle>ID: {{student.id}}</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <!-- <p>Email: {{student.studentEmail}}</p> -->
                <!-- <p>Phone: {{student.phoneNumber}}</p> -->
              </mat-card-content>
              <mat-card-actions>
                <button [routerLink]="['/showattendance', student.id]" mat-stroked-button color="primary">
                  <mat-icon>visibility</mat-icon>
                </button>
                <button [routerLink]="['/editdatastudent', student.id]" mat-stroked-button color="accent">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-stroked-button color="warn" (click)="deleteStudent(student.id || 0)">
                  <mat-icon>delete</mat-icon>
                </button>
              </mat-card-actions>
            </mat-card>
          </div>
          
    </div>

        <div class="rectangle">

            <h2> Attendance List</h2>

            <div class="mat-elevation-z8 mt-4 mb-4">
                <mat-table #table [dataSource]="dataSource" matSort>

                  <ng-container matColumnDef="id">
                    <mat-header-cell *matHeaderCellDef class="id">ID</mat-header-cell>
                    <mat-cell *matCellDef="let student">{{student.id}}</mat-cell>
                  </ng-container>

                  <ng-container matColumnDef="name">
                    <mat-header-cell *matHeaderCellDef class="EmpName">Name</mat-header-cell>
                    <mat-cell *matCellDef="let student">{{student.studentName}}</mat-cell>
                  </ng-container>

                  <ng-container matColumnDef="email">
                    <mat-header-cell *matHeaderCellDef class="email">Email</mat-header-cell>
                    <mat-cell *matCellDef="let student">{{student.studentEmail}}</mat-cell>
                  </ng-container>

                  <ng-container matColumnDef="phone">
                    <mat-header-cell *matHeaderCellDef class="phone">Phone</mat-header-cell>
                    <mat-cell *matCellDef="let student">{{student.phoneNumber}}</mat-cell>
                  </ng-container>

                  <ng-container matColumnDef="action">
                    <mat-header-cell *matHeaderCellDef class="action">Action</mat-header-cell>
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
        
    

     


import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../student/student.service';
import { MatDialog } from '@angular/material/dialog';
import { IStudent } from '../model';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'action'];
  dataSource: MatTableDataSource<IStudent>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  

  constructor(private studentService: StudentService, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<IStudent>();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getAllStudents();
    this.dataSource.filterPredicate = (data: IStudent, filter: string) => {
      const name = data.studentName.trim().toLowerCase();
      // const id = data.id?.toString();
      return name.includes(filter) ;
  }
}

  getAllStudents(): void {
    this.studentService.getAllStudents().subscribe((students: IStudent[]) => {
      this.dataSource = new MatTableDataSource<IStudent>(students);
      this.dataSource.paginator = this.paginator;
    });
   }

  deleteStudent(id: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this student?');

    if (confirmed) {
      this.studentService.deleteStudentById(id).subscribe(() => {
        this.getAllStudents();
      });
      }
    }

  isSignUp = false;

  onSignUp() {
    this.isSignUp = true;
  }

  onSignIn() {
    this.isSignUp = false;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
