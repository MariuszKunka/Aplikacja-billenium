import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzepisComponent } from './przepis.component';

describe('PrzepisComponent', () => {
  let component: PrzepisComponent;
  let fixture: ComponentFixture<PrzepisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzepisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzepisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
