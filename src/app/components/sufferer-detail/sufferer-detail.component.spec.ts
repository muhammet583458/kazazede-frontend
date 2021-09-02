import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffererDetailComponent } from './sufferer-detail.component';

describe('SuffererDetailComponent', () => {
  let component: SuffererDetailComponent;
  let fixture: ComponentFixture<SuffererDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuffererDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuffererDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
