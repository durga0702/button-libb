import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLibbComponent } from './button-libb.component';

describe('ButtonLibbComponent', () => {
  let component: ButtonLibbComponent;
  let fixture: ComponentFixture<ButtonLibbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonLibbComponent]
    });
    fixture = TestBed.createComponent(ButtonLibbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
