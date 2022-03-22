import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsshellComponent } from './comments-shell.component';

describe('CommentsshellComponent', () => {
  let component: CommentsshellComponent;
  let fixture: ComponentFixture<CommentsshellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsshellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
