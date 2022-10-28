import {
  AbstractControl,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
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
): UntypedFormGroup {
  return new UntypedFormGroup({
    street: new UntypedFormControl(address.street, [Validators.required]),
    number: new UntypedFormControl(address.number),
    zip: new UntypedFormControl(address.zip),
  });
}

export const nameValidators = [Validators.required, Validators.minLength(2)];

export const adressForm = {
  name: new UntypedFormControl('', nameValidators),
  lastName: new UntypedFormControl('', [Validators.required]),
  bankDetails: new UntypedFormGroup({
    bankName: new UntypedFormControl(''),
    iban: new UntypedFormControl('', [
      Validators.minLength(24),
      Validators.maxLength(24),
    ]),
  }),
  address: new UntypedFormArray([]),
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
