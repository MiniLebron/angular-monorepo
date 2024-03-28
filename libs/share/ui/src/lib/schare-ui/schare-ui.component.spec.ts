import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchareUiComponent } from './schare-ui.component';

describe('SchareUiComponent', () => {
  let component: SchareUiComponent;
  let fixture: ComponentFixture<SchareUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchareUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SchareUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
