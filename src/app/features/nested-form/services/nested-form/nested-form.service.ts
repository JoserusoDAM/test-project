import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  adressForm,
  createFormAdress,
  crossValitator,
  validateName,
} from 'src/app/features/nested-form/forms/adress-form.form';

@Injectable({
  providedIn: 'root',
})
export class NestedFormService extends FormGroup {
  constructor() {
    super(adressForm);

    this.addValidators(crossValitator());
    this.name.addValidators(Validators.minLength(5));
    this.name.addValidators(validateName());

    this.updateValueAndValidity();
  }

  get name() {
    return this.get('name') as FormControl;
  }

  get lastName() {
    return this.get('lastName') as FormControl;
  }

  get bankDetails() {
    return this.get('bankDetails') as FormGroup;
  }

  get bankName() {
    return this.get('bankDetails.bankName') as FormGroup;
  }

  get iban() {
    return this.get('bankDetails.iban') as FormGroup;
  }

  get address() {
    return this.get('address') as FormArray;
  }

  addAddress(): void {
    return this.address.push(createFormAdress());
  }

  removeAddress(index: number): void {
    this.address.removeAt(index);
  }
}
