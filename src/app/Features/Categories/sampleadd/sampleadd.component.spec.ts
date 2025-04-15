import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleaddComponent } from './sampleadd.component';

describe('SampleaddComponent', () => {
  let component: SampleaddComponent;
  let fixture: ComponentFixture<SampleaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
