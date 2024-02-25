import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestSellersRoutingModule } from './best-sellers-routing.module';
import { BestSellersMainPageComponent } from './best-sellers-main-page/best-sellers-main-page.component';
import { CardComponent } from './card/card.component';
import { ShortenTextPipe } from '../pipes/shorten-text.pipe';


@NgModule({
  declarations: [
    BestSellersMainPageComponent,
    CardComponent,
    ShortenTextPipe
  ],
  imports: [
    CommonModule,
    BestSellersRoutingModule
  ]
})
export class BestSellersModule { }
