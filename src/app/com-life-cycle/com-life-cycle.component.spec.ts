import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLifeCycleComponent } from './com-life-cycle.component';

describe('ComLifeCycleComponent', () => {
  let component: ComLifeCycleComponent;
  let fixture: ComponentFixture<ComLifeCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComLifeCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
