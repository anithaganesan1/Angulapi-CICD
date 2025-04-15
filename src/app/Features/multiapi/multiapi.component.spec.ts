import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiapiComponent } from './multiapi.component';

describe('MultiapiComponent', () => {
  let component: MultiapiComponent;
  let fixture: ComponentFixture<MultiapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
