import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServiceServerComponent } from './show-service-server.component';

describe('ShowServiceServerComponent', () => {
  let component: ShowServiceServerComponent;
  let fixture: ComponentFixture<ShowServiceServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowServiceServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowServiceServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
