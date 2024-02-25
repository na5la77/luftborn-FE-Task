import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  
  @Input() product?: Product;
  @Input() secondBackgroundColor?:string




  moreOptions() {
    console.log(this.product?.id ?? '');
  }
}
