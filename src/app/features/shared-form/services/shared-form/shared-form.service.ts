import { Injectable } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import {
  createPasswordStrengthValidator,
  validateName,
} from 'src/app/features/shared-form/forms/example-1.form';
import {
  SharedFormData,
  SharedFormModel,
} from '../../models/shared-form-data.model';

@Injectable({
  providedIn: 'root',
})
export class SharedFormService {
  constructor(private readonly fb: NonNullableFormBuilder) {}

  form = this.fb.group<SharedFormModel>({
    name: this.fb.control('', [
      Validators.required,
      Validators.minLength(2),
      validateName(),
    ]),
    age: this.fb.control<number | null>(null, [Validators.min(0)]),
    password: this.fb.control('', [createPasswordStrengthValidator()]),
  });

  get name() {
    return this.form.get('name') as FormControl<string>;
  }

  get age() {
    return this.form.get('age') as FormControl<number>;
  }

  get password() {
    return this.form.get('password') as FormControl<string>;
  }

  setValueForms({ name, age, password }: SharedFormData): void {
    this.name.setValidators(Validators.minLength(5));

    this.form.setValue({
      name,
      age,
      password,
    });
    this.form.markAllAsTouched();
    this.form.markAsDirty();
  }
}
