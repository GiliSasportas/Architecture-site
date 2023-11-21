import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReplyComponent } from './show-reply.component';

describe('ShowReplyComponent', () => {
  let component: ShowReplyComponent;
  let fixture: ComponentFixture<ShowReplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
