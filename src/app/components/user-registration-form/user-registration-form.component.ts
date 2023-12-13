import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from 'src/app/guard/auth.service';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class UserRegistrationFormComponent implements OnInit {
  public registrationFormGroup!: FormGroup;
  public hide = true;
  public loading = false;
  public errorMessage = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private titleService: Title,
    private authService: AuthService
  ) {}

  async ngOnInit() {
    // Setting browser title
    this.titleService.setTitle('Registration form');
    // Creating Form fields
    this.registrationFormGroup = this.createFormFields();
  }

  private createFormFields(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      bio: [null, Validators.required],
    });
  }

  /**
   *  Getter function for form controls
   */
  get emailFormControl(): FormControl {
    return this.registrationFormGroup.get('email') as FormControl;
  }

  /**
   *  Getter function for form controls
   */
  get passwordFormControl(): FormControl {
    return this.registrationFormGroup.get('password') as FormControl;
  }

  /**
   *  Getter function for form controls
   */
  get bioFormControl(): FormControl {
    return this.registrationFormGroup.get('bio') as FormControl;
  }

  /**
   *
   * @returns Error message for Form Control Email if the field is invalid or empty
   */
  getEmailDescriptionError(): string {
    return this.emailFormControl.hasError('required')
      ? 'Email Address is required'
      : 'Not a Valid Email Format';
  }

  /**
   *
   * @returns Error message for Form Control password if the field is empty
   */
  getPasswordErrorMessage(): string {
    return this.passwordFormControl.hasError('required')
      ? 'Password is required'
      : '';
  }

  /**
   *
   * @returns Error message for Form Control Bio if the field is empty
   */
  getBioErrorMessage(): string {
    return this.bioFormControl.hasError('required') ? 'Bio is required' : '';
  }

  /**
   *
   * @param formValues - form field values passed on while on submit
   * @returns
   */
  async onSubmit(formValues: any) {
    if (formValues && this.registrationFormGroup.valid) {
      this.loading = !this.loading;
      const response = await this.userService.registerUserForm();
      if (response) {
        this.errorMessage = false;
        this.authService.registerUser(response.success);
        this.router.navigateByUrl('/profile');
      } else {
        this.errorMessage = true;
        this.loading = false;
      }
    } else {
      this.loading = false;
    }
  }
}
