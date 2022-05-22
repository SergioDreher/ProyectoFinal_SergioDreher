import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoProgramaComponent } from './logo-programa.component';

describe('LogoProgramaComponent', () => {
  let component: LogoProgramaComponent;
  let fixture: ComponentFixture<LogoProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoProgramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
