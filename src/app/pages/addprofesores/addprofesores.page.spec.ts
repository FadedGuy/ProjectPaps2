import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofesoresPage } from './addprofesores.page';

describe('AddprofesoresPage', () => {
  let component: AddprofesoresPage;
  let fixture: ComponentFixture<AddprofesoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddprofesoresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprofesoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
