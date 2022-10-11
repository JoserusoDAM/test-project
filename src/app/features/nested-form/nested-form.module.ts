import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NestedFormComponent } from './components/nested-form/nested-form.component';
import { NestedFormRoutingModule } from './nested-form-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NestedFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NestedFormRoutingModule,
    SharedModule,
  ],
})
export class NestedFormModule {}
