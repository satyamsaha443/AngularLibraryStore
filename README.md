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

  <!-- Artwork Listing -->
  <div class="results-container row">
    <div *ngFor="let art of artworks; let i = index" class="col-md-4 mb-4">
      <div class="card" (click)="openModal(i)">
        <img [src]="art.thumbnail_url" alt="{{ art.title }}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ art.title }}</h5>
          <p class="card-text">{{ art.artist_title }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="artDetailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ selectedArt?.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img [src]="selectedArt?.image_url" alt="{{ selectedArt?.title }}" class="img-fluid mb-3">
          <p><strong>Artist:</strong> {{ selectedArt?.artist_title }}</p>
          <!-- Add more details as needed -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>


import { Component, OnInit } from '@angular/core';
import { ArtService } from '../art.service';

declare var $: any;  // If you're using Bootstrap's JavaScript, you'll need to declare jQuery

@Component({ /*...*/ })
export class BrowserComponent implements OnInit {
  artworks: any[] = [];
  selectedArt: any;

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    // Assuming you're fetching artworks on init
    this.artService.getArtworks().subscribe(data => {
      this.artworks = data;  // Adjust based on the response structure
    });
  }

  openModal(index: number): void {
    this.selectedArt = this.artworks[index];
    $('#artDetailModal').modal('show');
  }
}

.card {
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.modal-body img {
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto;
}

<!-- Modal -->
<div class="modal fade" id="artDetailModal" tabindex="-1" aria-labelledby="artDetailLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="artDetailLabel">{{ selectedArt?.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
                <img [src]="selectedArt?.image_url" alt="{{ selectedArt?.title }}" class="img-fluid mb-3">
            </div>
            <div class="col-md-6">
                <p><strong>Artist:</strong> {{ selectedArt?.artist_title }}</p>
                <p><strong>Description:</strong> {{ selectedArt?.description }}</p>
                <p><strong>Medium:</strong> {{ selectedArt?.medium_display }}</p>
                <p><strong>Date:</strong> {{ selectedArt?.date_display }}</p>
                <p><strong>Dimensions:</strong> {{ selectedArt?.dimensions_display }}</p>
                <!-- Add any other relevant details available from the API -->
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
</div>

