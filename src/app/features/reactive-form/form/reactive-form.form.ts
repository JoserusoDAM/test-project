import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExtraInfoFormData } from '../models/extra-info-form-data.model';

export const defaultInfo: ExtraInfoFormData = {
  title: '',
  level: 0,
};

export function createExtraInfoForm(
  extraInfo: ExtraInfoFormData = defaultInfo
): FormGroup {
  return new FormGroup({
    title: new FormControl(extraInfo.title, [Validators.required]),
    level: new FormControl(extraInfo.level),
  });
}
