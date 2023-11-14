
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule and Routes

import { AppComponent } from './app.component';
import { ProductManagementComponent } from './product-management/product-management.component';
// Import other components if you have them

@NgModule({
  declarations: [
    AppComponent,
    ProductManagementComponent,
    // Add other components here if you have them
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([ // Configure routes here
      { path: '', redirectTo: '/products', pathMatch: 'full' }, // Default route
      { path: 'products', component: ProductManagementComponent }, // Route to ProductManagementComponent
      // Add more routes for other components/pages if needed
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


