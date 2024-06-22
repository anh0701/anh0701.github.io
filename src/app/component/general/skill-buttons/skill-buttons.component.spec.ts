import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillButtonsComponent } from './skill-buttons.component';

describe('SkillButtonsComponent', () => {
  let component: SkillButtonsComponent;
  let fixture: ComponentFixture<SkillButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillButtonsComponent]
    });
    fixture = TestBed.createComponent(SkillButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
