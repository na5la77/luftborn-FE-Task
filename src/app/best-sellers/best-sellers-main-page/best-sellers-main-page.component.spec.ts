import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersMainPageComponent } from './best-sellers-main-page.component';

describe('BestSellersMainPageComponent', () => {
  let component: BestSellersMainPageComponent;
  let fixture: ComponentFixture<BestSellersMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestSellersMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestSellersMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
