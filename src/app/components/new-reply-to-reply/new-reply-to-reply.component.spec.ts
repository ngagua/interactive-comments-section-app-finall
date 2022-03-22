/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewReplyToReplyComponent } from './new-reply-to-reply.component';

describe('NewReplyToReplyComponent', () => {
  let component: NewReplyToReplyComponent;
  let fixture: ComponentFixture<NewReplyToReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReplyToReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReplyToReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
