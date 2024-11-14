import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M4cComponent } from './m4c.component';

describe('M4cComponent', () => {
  let component: M4cComponent;
  let fixture: ComponentFixture<M4cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M4cComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M4cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
