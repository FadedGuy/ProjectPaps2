import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasElimPage } from './tareas-elim.page';

describe('TareasElimPage', () => {
  let component: TareasElimPage;
  let fixture: ComponentFixture<TareasElimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareasElimPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasElimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
