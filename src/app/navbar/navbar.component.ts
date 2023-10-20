import { query } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() search = new EventEmitter<string>();


  
  searchBooks(event: Event, title: string) {
    event.preventDefault(); // prevent the default submit behavior
    this.search.emit(title);
  }
}
