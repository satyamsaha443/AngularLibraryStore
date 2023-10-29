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




.container {
  max-width: 900px;
}

.search-container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.filter-container .row > div {
  margin-bottom: 10px;
}

.card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}
