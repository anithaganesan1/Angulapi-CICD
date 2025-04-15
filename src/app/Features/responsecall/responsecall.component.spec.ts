import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsecallComponent } from './responsecall.component';

describe('ResponsecallComponent', () => {
  let component: ResponsecallComponent;
  let fixture: ComponentFixture<ResponsecallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsecallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
