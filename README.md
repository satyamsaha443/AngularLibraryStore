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
          <img [src]="getArtworkImageUrl(art.image_id)" alt="{{ art.title }}" class="card-img-top" />
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
  
  searchArtworks(): void {
    console.log('Search query', this.searchQuery);
    this.artService.searchArtworks(this.searchQuery, this.filterOptions).subscribe(data => {
      this.searchResults = data.data;
    });
  }
  getArtworkImageUrl(imageId: string): string {
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
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
  private collectionsUrl : string = 'https://api.artic.edu/api/v1/collections';
  private paginationUrl: string = 'https://api.artic.edu/api/v1/artists/${artistId}/artworks?page=100&limit=100';
  id: any;

  constructor(private http: HttpClient) { }
  getArtworks(): Observable<any> {
    return this.http.get(this.baseUrl); 
  }
 

  searchArtworks(query: string, filters: any): Observable<any>{
    let params = new HttpParams().set('q', query);
    if(filters.artist){
      params = params.append('artist',filters.artist);
    }
    if(filters.medium){
      params = params.append('medium', filters.medium);
    }
    if(filters.timePeriod){
      params = params.append('time_period', filters.timePeriod);
    }
    return this.http.get(this.baseUrl, {params});  
  }
  
  getCollections(): Observable<any>{
    return this.http.get(this.collectionsUrl);
  }

  getPagination(): Observable<any> {
    return this.http.get(this.paginationUrl);
  }
  // searchArtworks(query: string): Observable<any> {
  //   const apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=20`;
  //   return this.http.get(apiUrl);
  // }

}




<div class="container mt-5">
    <div class="search-container mb-4">
      <input type="text" [(ngModel)]="searchQuery" placeholder="Search for artwork, artists..." class="form-control mb-2" />
      <button (click)="searchArtworks()" class="btn btn-primary">Search</button>
    </div>
  
    <!-- Artwork Listing -->
    <div class="results-container row">
      <div *ngFor="let art of searchResults" class="col-md-4 mb-4">
        <div class="card">
          <img [src]="getArtworkImageUrl(art.image_id)" alt="{{ art.title }}" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ art.title }}</h5>
            <p class="card-text">{{ art.artist_title }}</p>
          </div>
        </div>
      </div>
    </div>
</div>




// search.component.ts

export class SearchComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private artService: ArtService) {}

  ngOnInit(): void {}

  searchArtworks(): void {
    this.artService.searchArtworks(this.searchQuery).subscribe(data => {
      this.searchResults = data.data; 
    });
  }

  getArtworkImageUrl(imageId: string): string {
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  }
}



// art.service.ts

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private baseUrl: string = 'https://api.artic.edu/api/v1/artworks';

  constructor(private http: HttpClient) {}

  searchArtworks(query: string): Observable<any> {
    let params = new HttpParams().set('q', query);

    return this.http.get(this.baseUrl, { params })
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return throwError(error);
        })
      );
  }

  // ... other methods ...
}
