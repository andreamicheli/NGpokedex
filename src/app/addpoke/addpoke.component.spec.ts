import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpokeComponent } from './addpoke.component';

describe('AddpokeComponent', () => {
  let component: AddpokeComponent;
  let fixture: ComponentFixture<AddpokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
