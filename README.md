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


<div class="container mt-5">
    <div class="search-container mb-4">
      <input type="text" [(ngModel)]="searchQuery" placeholder="Search for artwork, artists..." class="form-control mb-2" />
      
      <!-- Filters -->
      <div class="filter-container mb-2">
        <div class="row">
          <div class="col-md-4">
            <input type="text" [(ngModel)]="filterOptions.artist" placeholder="Enter artist name..." class="form-control" />
          </div>
          <div class="col-md-4">
            <input type="text" [(ngModel)]="filterOptions.medium" placeholder="Enter medium..." class="form-control" />
          </div>
          <div class="col-md-4">
            <select [(ngModel)]="filterOptions.timePeriod" class="form-control">
              <option value="renaissance">Renaissance</option>
              <option value="modern">Modern</option>
              <option value="contemporary">Contemporary</option>
            </select>
          </div>
        </div>
      </div>
  
      <button (click)="searchArtworks()" class="btn btn-primary">Search</button>
    </div>
  
    <!-- Artwork Listing -->
    <div class="results-container row">
      <div *ngFor="let art of searchResults" class="col-md-4 mb-4">
        <div class="card">
          <img [src]="art.thumbnail_url" alt="{{ art.title }}" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ art.title }}</h5>
            <p class="card-text">{{ art.artist_title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  

import { Component, OnInit } from '@angular/core';
import { ArtService } from '../shared/art.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  filterOptions = {
    artist:'',
    medium:'',
    timePeriod:''
  };
  searchResults: any[]= [];
  constructor(private artService: ArtService){}

  ngOnInit(): void{}
  
  searchArtworks():void{
    this.artService.searchArtworks(this.searchQuery, this.filterOptions).subscribe(data => {
      this.searchResults = data.data;
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  private baseUrl: string= 'https://api.artic.edu/api/v1/artworks';
  image_url: string='https://www.artic.edu/iiif/2/{identifier}/full/1686,/0/default.jpg'
  constructor(private http: HttpClient) { }
  getArtworks(): Observable<any> {
    return this.http.get(this.baseUrl); 
  }

  searchArtworks(query: string, filters: any): Observable<any>{
    let params = new HttpParams().set('q', query);
    if(filters.artist){
      params = params.set('artist',filters.artist);
    }
    if(filters.medium){
      params = params.set('medium', filters.medium);
    }
    if(filters.timePeriod){
      params = params.set('time_period', filters.timePeriod);
    }
    return this.http.get(this.baseUrl, {params});



}
}
