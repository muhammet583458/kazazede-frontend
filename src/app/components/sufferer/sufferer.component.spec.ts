import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffererComponent } from './sufferer.component';

describe('SuffererComponent', () => {
  let component: SuffererComponent;
  let fixture: ComponentFixture<SuffererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuffererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuffererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
