import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTareasPage } from './show-tareas.page';

describe('ShowTareasPage', () => {
  let component: ShowTareasPage;
  let fixture: ComponentFixture<ShowTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTareasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
