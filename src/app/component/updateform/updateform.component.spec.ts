import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateformComponent } from './updateform.component';

describe('UpdateformComponent', () => {
  let component: UpdateformComponent;
  let fixture: ComponentFixture<UpdateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
