import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { createSchoolForm } from '../../form/school-form.form';

@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.css'],
})
export class SchoolFormComponent implements OnInit {
  form!: FormGroup;

  get studentForm() {
    return this.form.get('studentForm') as FormGroup;
  }

  get teacherForm() {
    return this.form.get('teacherForm') as FormGroup;
  }

  constructor() {}

  ngOnInit(): void {
    this.form = createSchoolForm();
  }

  onSubmit(): void {
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
