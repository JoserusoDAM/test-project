import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './views/reactive-form/reactive-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { StudentSectionComponent } from './components/student-section/student-section.component';
import { TeacherSectionComponent } from './components/teacher-section/teacher-section.component';
import { SchoolFormComponent } from './components/school-form/school-form.component';

@NgModule({
  declarations: [
    ReactiveFormComponent,
    StudentSectionComponent,
    TeacherSectionComponent,
    SchoolFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ReactiveFormRoutingModule,
    FormsModule,
  ],
})
export class ReactiveFormModule {}
