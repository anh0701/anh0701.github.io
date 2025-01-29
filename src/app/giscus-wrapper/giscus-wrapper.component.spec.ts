import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiscusWrapperComponent } from './giscus-wrapper.component';

describe('GiscusWrapperComponent', () => {
  let component: GiscusWrapperComponent;
  let fixture: ComponentFixture<GiscusWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiscusWrapperComponent]
    });
    fixture = TestBed.createComponent(GiscusWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
