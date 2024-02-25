import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-best-sellers-main-page',
  templateUrl: './best-sellers-main-page.component.html',
  styleUrl: './best-sellers-main-page.component.scss',
})
export class BestSellersMainPageComponent implements OnInit {
  productsList?: Product[];
  selected: string = 'w';
  cardBackgroundColor: Record<string, string> = {
    1: "orange",
    2: "lightBlue",
    3: "red",
    4: "orange",
    5: "lightBlue",
    6: "green",
    7: "purple",
    8: "yellow",
    9: "green",
    10: "purple",
  };
  

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      this.productsList = res;
    });
  }

  selectedHandler(selected: string) {
    this.selected = selected;
  }
}
