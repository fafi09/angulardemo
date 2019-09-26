import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProfileComponentComponent } from './hero-profile-component.component';

describe('HeroProfileComponentComponent', () => {
  let component: HeroProfileComponentComponent;
  let fixture: ComponentFixture<HeroProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
