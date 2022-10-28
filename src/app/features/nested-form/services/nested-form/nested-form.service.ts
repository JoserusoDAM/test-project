import { Injectable } from '@angular/core';
import {
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
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
export class NestedFormService extends UntypedFormGroup {
  constructor() {
    super(adressForm);

    this.addValidators(crossValitator());
    this.name.addValidators(Validators.minLength(5));
    this.name.addValidators(validateName());

    this.updateValueAndValidity();
  }

  get name() {
    return this.get('name') as UntypedFormControl;
  }

  get lastName() {
    return this.get('lastName') as UntypedFormControl;
  }

  get bankDetails() {
    return this.get('bankDetails') as UntypedFormGroup;
  }

  get bankName() {
    return this.get('bankDetails.bankName') as UntypedFormGroup;
  }

  get iban() {
    return this.get('bankDetails.iban') as UntypedFormGroup;
  }

  get address() {
    return this.get('address') as UntypedFormArray;
  }

  addAddress(): void {
    return this.address.push(createFormAdress());
  }

  removeAddress(index: number): void {
    this.address.removeAt(index);
  }
}
