import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { form } from 'src/app/features/shared-form/forms/example-1.form';
import { SharedFormData } from '../../models/shared-form-data.model';

@Injectable({
  providedIn: 'root',
})
export class SharedFormService extends FormGroup {
  constructor() {
    super(form);
  }

  get name() {
    return this.get('name') as FormControl;
  }

  get age() {
    return this.get('age') as FormControl;
  }

  get password() {
    return this.get('password') as FormControl;
  }

  setValueForms({ name, age, password }: SharedFormData): void {
    this.setValue({
      name,
      age,
      password,
    });
    this.markAllAsTouched();
    this.markAsDirty();
  }
}
