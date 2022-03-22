import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRepliesComponent } from './new-replies.component';

describe('NewRepliesComponent', () => {
  let component: NewRepliesComponent;
  let fixture: ComponentFixture<NewRepliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRepliesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRepliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
