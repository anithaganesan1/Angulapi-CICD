import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersidepaginationComponent } from './serversidepagination.component';

describe('ServersidepaginationComponent', () => {
  let component: ServersidepaginationComponent;
  let fixture: ComponentFixture<ServersidepaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServersidepaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServersidepaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
