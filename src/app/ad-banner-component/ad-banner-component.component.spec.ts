import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBannerComponentComponent } from './ad-banner-component.component';

describe('AdBannerComponentComponent', () => {
  let component: AdBannerComponentComponent;
  let fixture: ComponentFixture<AdBannerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBannerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBannerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
