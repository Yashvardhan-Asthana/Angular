import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustedTableComponent } from './adjusted-table.component';

describe('AdjustedTableComponent', () => {
  let component: AdjustedTableComponent;
  let fixture: ComponentFixture<AdjustedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdjustedTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjustedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
