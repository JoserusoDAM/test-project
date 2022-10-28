import { FormControl } from '@angular/forms';

export interface SharedFormData {
  name: string;
  age: number;
  password: string;
}

export interface SharedFormModel {
  name: FormControl<string>;
  age: FormControl<number | null>;
  password: FormControl<string>;
  parentName?: FormControl<string | null>;
}
