import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusScreenComponent } from './bonus-screen.component';

describe('BonusScreenComponent', () => {
  let component: BonusScreenComponent;
  let fixture: ComponentFixture<BonusScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonusScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonusScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
