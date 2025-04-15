import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadintercComponent } from './loadinterc.component';

describe('LoadintercComponent', () => {
  let component: LoadintercComponent;
  let fixture: ComponentFixture<LoadintercComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadintercComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadintercComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
