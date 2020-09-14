import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DSidebarComponent } from './d-sidebar.component';

describe('DSidebarComponent', () => {
  let component: DSidebarComponent;
  let fixture: ComponentFixture<DSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
