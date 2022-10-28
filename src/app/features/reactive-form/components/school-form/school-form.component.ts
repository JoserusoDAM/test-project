import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { createSchoolForm } from '../../form/school-form.form';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css'],
})
export class SchoolFormComponent implements OnInit {
  form!: UntypedFormGroup;

  get studentForm() {
    return this.form.get('studentForm') as UntypedFormGroup;
  }

  get teacherForm() {
    return this.form.get('teacherForm') as UntypedFormGroup;
  }

  constructor() {}

  ngOnInit(): void {
    this.form = createSchoolForm();
  }

  onSubmit($event: SubmitEvent): void {
    if ($event.submitter?.getAttribute('name') === 'enviar') {
      console.log('enviar');
    }

    if ($event.submitter?.getAttribute('name') === 'guardar') {
      console.log('guardar');
    }

    console.log(this.form.value);
  }

  fillForm(): void {
    this.studentForm.patchValue({
      name: 'Jonh Doe',
    });

    this.teacherForm.setValue({
      name: 'Jonh Doe',
      subject: 'Matemáticas',
    });

    this.form.markAllAsTouched();
    this.form.markAsDirty();
  }
}
