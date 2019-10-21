import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaClasePage } from './nueva-clase.page';

describe('NuevaClasePage', () => {
  let component: NuevaClasePage;
  let fixture: ComponentFixture<NuevaClasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaClasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
