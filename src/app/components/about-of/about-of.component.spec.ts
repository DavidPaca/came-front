import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOfComponent } from './about-of.component';

describe('AboutOfComponent', () => {
  let component: AboutOfComponent;
  let fixture: ComponentFixture<AboutOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutOfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
