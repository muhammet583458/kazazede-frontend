import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFounderComponent } from './add-founder.component';

describe('AddFounderComponent', () => {
  let component: AddFounderComponent;
  let fixture: ComponentFixture<AddFounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFounderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
