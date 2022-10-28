import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ExtraInfoFormData } from './extra-info-form-data.model';

export interface ReactiveFormData {
  name: string;
  lastName: string;
  userName: string;
  city: string;
  country: string;
  zip: number;
  terms: boolean;
  extraInfo: ExtraInfoFormData[];
}

export interface ReactiveFormType {
  name: FormControl<string>;
  lastName: FormControl<string>;
  userName: FormControl<string>;
  city: FormControl<string>;
  country: FormControl<string>;
  zip: FormControl<number>;
  terms: FormControl<boolean>;
  extraInfo: FormArray<
    FormGroup<{
      title: FormControl<string | null>;
      level: FormControl<number | null>;
    }>
  >;
}
