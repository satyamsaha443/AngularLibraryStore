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

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" *ngIf="artworkCarouselItems">
    <ol class="carousel-indicators">
      <li *ngFor="let item of artworkCarouselItems; let i = index" [attr.data-bs-target]="'#carouselExampleIndicators'" [attr.data-bs-slide-to]="i" [class.active]="i === 0"></li>
    </ol>
    <div class="carousel-inner">
      <div *ngFor="let item of artworkCarouselItems; let i = index" class="carousel-item" [class.active]="i === 0">
        <img [src]="item.image" [alt]="item.alt" class="d-block w-100">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </a>
  </div>


<div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <mat-paginator [length]="pagination.total" [pageSize]="pageSize" [pageSizeOptions]="[6, 12, 24, 48]" showFirstLastButtons (page)="onPageChange($event)">
        </mat-paginator>
      </div>
    </div>

    
    <!-- Artwork Listing -->
    <div class="row">
      <div class="col-md-12">
        <div class="results-container row flex-wrap">
          <div *ngFor="let art of pageSlice" class="col-md-4 mb-4">
            <div class="card" (click)="openDetail(art)">
              <img [src]="getArtworkImageUrl(art.image_id)" alt="{{ art.title }}" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{ art.title }}</h5>
                <p class="card-text">{{ art.artist_title }}</p>
              </div>
            </div>
            <div class="button-container">
                <button mat-icon-button color="primary" (click)="addToFavorites(art)">
                  <mat-icon>favorite</mat-icon>
                </button>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  

   
    
    <!-- Modal -->
    <div class="modal fade" id="artDetailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ selectedArt?.title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img [src]="getArtworkImageUrl(selectedArt?.image_id)" alt="{{ selectedArt?.title }}" class="img-fluid mb-3">
              
              <!-- <p><strong>Artist:</strong> {{ selectedArt?.artist_title }}</p>
              <p><strong>Date:</strong> {{ selectedArt?.date }}</p>
              <p><strong>Description:</strong> {{ selectedArt?.description }}</p> -->
              <!-- Add more details as needed -->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
  

        
    </div>



   
</div>  



import { ArtService } from '../shared/art.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ArtworkdetailComponent } from '../artworkdetail/artworkdetail.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';


declare var $: any;

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit, AfterViewInit {
  artworks: any[] =[];
  selectedArt: any;
  pagination: any ={};
  pageSize: number = 6;
  pageNumber: number = 1;

  artworkCarouselItems = [
    {
      image: 'assets/carousel2.jpg',
      alt: 'Carousel Image 1'
    },
    {
      image: 'assets/carousel1.jpg',
      alt: 'Carousel Image 2'
    },
    {
      image: 'assets/carousel4.jpg',
      alt: 'Carousel Image 3'
    }
  ];




  public pageSlice: any[] = [];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

 


  constructor(private artService: ArtService,
    public dialog: MatDialog
    ){}

    favorites: ArtService[] = [];
    addToFavorites(artwork: any): void { // modified addToFavorites method
      this.favorites.push(artwork);
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }

    
    ngOnInit(): void {
      this.artService.getArtworks().subscribe(data => {
        this.artworks = data.data;
        console.log(this.artworks);
        this.pageSlice = this.artworks.slice(0, this.pageSize);
      });
    
      this.artService.getPagination().subscribe(pagination => {
        this.pagination = pagination;
        console.log(this.pagination);
        this.paginator.length = this.pagination.total;
        this.pageSize = this.pagination.perPage; // Add this line to update the pageSize value
        this.paginator.pageSize = this.pageSize;
        this.paginator.pageIndex = this.pageNumber - 1;
      });
    }
    ngAfterViewInit(): void {
      this.paginator.pageSize = this.pageSize; // Update the pageSize value here as well
      this.paginator.page.subscribe((event: any) => {
        this.pageNumber = event.pageIndex + 1;
        const startIndex = event.pageIndex * event.pageSize;
        const endIndex = startIndex + event.pageSize;
        this.pageSlice = this.artworks.slice(startIndex, endIndex);
      });

      setInterval(() => {
        const activeElement = document.querySelector('.carousel-item.active');
        const activeIndex = activeElement?.getAttribute('data-bs-slide-to');
        const nextIndex = parseInt(activeIndex || "0") === this.artworkCarouselItems.length - 1 ? 0 : parseInt(activeIndex || "0") + 1;
        const nextSlide = document.querySelector(`[data-bs-slide-to='${nextIndex}']`);
        nextSlide?.dispatchEvent(new Event('click'));
      }, 2000);
    }
    onPageChange(event: PageEvent) {
      this.pageSize = event.pageSize; // Update the pageSize value
      this.pageNumber = event.pageIndex + 1;
      const startIndex = event.pageIndex * event.pageSize;
      const endIndex = startIndex + event.pageSize;
      this.pageSlice = this.artworks.slice(startIndex, endIndex);
      console.log(this.pageSlice);
    }
  openModal(art: any): void {
    this.selectedArt = art;
    $('#artDetailModal').modal('show');
  }

  openDetail(art:any): void {
    this.dialog.open(ArtworkdetailComponent,{
      width: '600px',
      data: art
    });
  }
getArtworkImageUrl(imageId: string): string {
  return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
}
}




<div *ngFor="let art of favorites">
    <div class="card" (click)="openDetail(art)">
        <img [src]="getArtworkImageUrl(art.image_id)" alt="{{ art.title }}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ art.title }}</h5>
          <p class="card-text">{{ art.artist_title }}</p>
        </div>
      </div>
    <!-- display other properties of the artwork as desired -->
  </div>




  import { Component, OnInit } from '@angular/core';
import { ArtService } from '../shared/art.service';
import { ArtworkdetailComponent } from '../artworkdetail/artworkdetail.component';
import { MatDialog } from '@angular/material/dialog';





@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  favorites: any[] = []; // modify favorites type to any[]

  constructor( public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
  }

  openDetail(art:any): void {
    this.dialog.open(ArtworkdetailComponent,{
      width: '600px',
      data: art
    });
  }
  getArtworkImageUrl(imageId: string): string {
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  }
  

}
/////



<div *ngFor="let art of favorites; let i = index" class="mb-4">
  <div class="card">
    <img [src]="getArtworkImageUrl(art.image_id)" alt="{{ art.title }}" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ art.title }}</h5>
      <p class="card-text">{{ art.artist_title }}</p>
      <button class="btn btn-danger" (click)="removeFavorite(i)">Remove from Favorites</button>
    </div>
  </div>
</div>



// ... (other imports)
import { MatSnackBar } from '@angular/material/snack-bar'; // for feedback messages

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  favorites: any[] = [];

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { } // Inject MatSnackBar

  ngOnInit(): void {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      this.favorites = JSON.parse(savedFavorites);
    }
  }

  openDetail(art: any): void {
    this.dialog.open(ArtworkdetailComponent, {
      width: '600px',
      data: art
    });
  }

  getArtworkImageUrl(imageId: string): string {
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  }

  removeFavorite(index: number): void {
    this.favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.snackBar.open('Artwork removed from favorites!', '', { duration: 2000 });
  }
}


// When adding
addToFavorites(artwork: any): void {
  this.favorites.push(artwork);
  localStorage.setItem('favorites', JSON.stringify(this.favorites));
  this.notification = 'Artwork added to favorites!';
}

// When removing (you might need to implement this based on your exact requirements)
removeFromFavorites(artwork: any): void {
  const index = this.favorites.indexOf(artwork);
  if (index > -1) {
    this.favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.notification = 'Artwork removed from favorites!';
  }
}

// Method to dismiss the notification
dismissNotification(): void {
  this.notification = null;
}


.notification {
  background-color: #ffdddd; /* Red background */
  color: #a00; /* Darker red text */
  padding: 15px;
  margin-bottom: 20px;
  position: relative;
  border-radius: 5px;
}

.notification button {
  position: absolute;
  top: 5px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}


addToFavorites(artwork: any): void {
  // Check if the artwork is already in the favorites list
  const exists = this.favorites.some(fav => fav.image_id === artwork.image_id);

  if (!exists) {
    this.favorites.push(artwork);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.notification = 'Artwork added to favorites!';
  } else {
    this.notification = 'This artwork is already in your favorites!';
  }
}


removeFromFavorites(artwork: any): void {
  const index = this.favorites.findIndex(fav => fav.image_id === artwork.image_id);

  if (index > -1) {
    this.favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.notification = 'Artwork removed from favorites!';
  }
}


