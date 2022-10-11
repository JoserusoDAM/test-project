import { FormControl, FormGroup } from '@angular/forms';

export function createSchoolForm(): FormGroup {
  const form: FormGroup = new FormGroup({
    studentForm: createStudentForm(),
    teacherForm: createTeacherForm(),
  });

  return form;
}

export function createStudentForm(): FormGroup {
  const form: FormGroup = new FormGroup({
    name: new FormControl(''),
    grade: new FormControl(''),
  });

  return form;
}

export function createTeacherForm(): FormGroup {
  const form: FormGroup = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
  });

  return form;
}
