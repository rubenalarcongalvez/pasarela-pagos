import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoFiComponent } from './ko-fi.component';

describe('KoFiComponent', () => {
  let component: KoFiComponent;
  let fixture: ComponentFixture<KoFiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoFiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
