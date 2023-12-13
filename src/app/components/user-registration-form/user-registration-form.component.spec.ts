import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRegistrationFormComponent } from './user-registration-form.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('UserRegistrationFormComponent', () => {
  let component: UserRegistrationFormComponent;
  let fixture: ComponentFixture<UserRegistrationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UserRegistrationFormComponent],
      providers: [provideAnimations()],
    });
    fixture = TestBed.createComponent(UserRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
