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
  AddressNestedFormData,
  NestedFormData,
} from '../models/nested-form-data.model';

const defaultAddress: AddressNestedFormData = {
  number: '',
  street: '',
  zip: '',
};

export function createFormAdress(
  address: AddressNestedFormData = defaultAddress
): FormGroup {
  return new FormGroup({
    street: new FormControl(address.street, [Validators.required]),
    number: new FormControl(address.number),
    zip: new FormControl(address.zip),
  });
}

export const nameValidators = [Validators.required, Validators.minLength(2)];

export const adressForm = {
  name: new FormControl('', nameValidators),
  lastName: new FormControl('', [Validators.required]),
  bankDetails: new FormGroup({
    bankName: new FormControl(''),
    iban: new FormControl('', [
      Validators.minLength(24),
      Validators.maxLength(24),
    ]),
  }),
  address: new FormArray([]),
};

export function crossValitator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as NestedFormData;

    if (value.name.includes('Jose') && value.lastName.includes('Ruso')) {
      return { customError: true };
    }
    return null;
  };
}

export function validateName(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (value.includes('admin')) {
      return { invalidName: true };
    }
    return null;
  };
}
