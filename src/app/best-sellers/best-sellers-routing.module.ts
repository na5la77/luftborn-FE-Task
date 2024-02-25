import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestSellersMainPageComponent } from './best-sellers-main-page/best-sellers-main-page.component';

const routes: Routes = [
  {
    path: 'top-sellers',
    component: BestSellersMainPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestSellersRoutingModule {}
