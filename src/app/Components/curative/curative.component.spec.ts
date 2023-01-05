import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurativeComponent } from './curative.component';

describe('CurativeComponent', () => {
  let component: CurativeComponent;
  let fixture: ComponentFixture<CurativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
