import {
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AbstractControl } from '@angular/forms';

const forbiddenNames = ['admin', 'fake', 'foo'];

export const form = {
  name: new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    validateName(),
  ]),
  age: new FormControl('', [Validators.min(0)]),
  password: new FormControl('', [createPasswordStrengthValidator()]),
};

export function validateName(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;

    if (forbiddenNames.includes(value)) {
      return { invalidName: true };
    }

    return null;
  };
}

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    const passwordLenght = 6;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const hasLength = value.length > passwordLenght;
    const passwordValid =
      hasUpperCase && hasLowerCase && hasNumeric && hasLength;

    // return !passwordValid ? { passwordStrength: true } : null;
    return !passwordValid
      ? {
          passwordStrength: {
            passwordStrength: true,
            requiredLength: passwordLenght,
          },
        }
      : null;
  };
}
