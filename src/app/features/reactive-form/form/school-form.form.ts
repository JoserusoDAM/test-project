import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

export function createSchoolForm(): UntypedFormGroup {
  const form: UntypedFormGroup = new UntypedFormGroup({
    studentForm: createStudentForm(),
    teacherForm: createTeacherForm(),
  });

  return form;
}

export function createStudentForm(): UntypedFormGroup {
  const form: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    grade: new UntypedFormControl(''),
  });

  return form;
}

export function createTeacherForm(): UntypedFormGroup {
  const form: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    subject: new UntypedFormControl(''),
  });

  return form;
}
