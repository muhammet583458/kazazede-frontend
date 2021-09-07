import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffererAddComponent } from './sufferer-add.component';

describe('SuffererAddComponent', () => {
  let component: SuffererAddComponent;
  let fixture: ComponentFixture<SuffererAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuffererAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuffererAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
