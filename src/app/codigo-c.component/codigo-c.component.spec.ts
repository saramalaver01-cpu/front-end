import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoCComponent } from './codigo-c.component';

describe('CodigoCComponent', () => {
  let component: CodigoCComponent;
  let fixture: ComponentFixture<CodigoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodigoCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
