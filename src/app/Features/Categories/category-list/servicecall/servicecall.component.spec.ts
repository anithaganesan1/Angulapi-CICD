import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecallComponent } from './servicecall.component';

describe('ServicecallComponent', () => {
  let component: ServicecallComponent;
  let fixture: ComponentFixture<ServicecallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicecallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
