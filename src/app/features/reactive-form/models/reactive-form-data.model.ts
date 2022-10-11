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
