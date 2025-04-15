import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAYOUTComponent } from './layout.component';

describe('LAYOUTComponent', () => {
  let component: LAYOUTComponent;
  let fixture: ComponentFixture<LAYOUTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LAYOUTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LAYOUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
