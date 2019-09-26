import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobAdComponentComponent } from './hero-job-ad-component.component';

describe('HeroJobAdComponentComponent', () => {
  let component: HeroJobAdComponentComponent;
  let fixture: ComponentFixture<HeroJobAdComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroJobAdComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroJobAdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
