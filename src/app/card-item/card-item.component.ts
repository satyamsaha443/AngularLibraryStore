import { Component, EventEmitter, Input, Output } from '@angular/core';

interface CardDetails {
  ISBN: number;
  title: string,
  image: string;
  price: number,
  quantity: number;
}

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() item: CardDetails | undefined;

  @Output() removeFromCart: EventEmitter<number> = new EventEmitter();
  @Output() decreaseFromCart: EventEmitter<number> = new EventEmitter();
  @Output() increaseInCart: EventEmitter<number> = new EventEmitter();

  removeBook(ISBN: number) {
    this.removeFromCart.emit(ISBN);
  }

  addbooks(ISBN: number) {
    this.increaseInCart.emit(ISBN);
  }

  decreaseBooks(ISBN: number) {
    this.decreaseFromCart.emit(ISBN);
  }


}
