import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PninaComponent } from './pnina.component';

describe('PninaComponent', () => {
  let component: PninaComponent;
  let fixture: ComponentFixture<PninaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PninaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PninaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
