import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingMessage } from './loading-message';

describe('LoadingMessage', () => {
  let component: LoadingMessage;
  let fixture: ComponentFixture<LoadingMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
