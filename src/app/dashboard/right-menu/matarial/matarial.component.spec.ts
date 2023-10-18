import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatarialComponent } from './matarial.component';

describe('MatarialComponent', () => {
  let component: MatarialComponent;
  let fixture: ComponentFixture<MatarialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatarialComponent]
    });
    fixture = TestBed.createComponent(MatarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
