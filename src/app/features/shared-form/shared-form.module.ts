import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFormRoutingModule } from './shared-form-routing.module';
import { ParentServiceFormComponent } from './views/parent-service-form/parent-service-form.component';
import { SecondaryInfoComponent } from 'src/app/features/shared-form/components/secondary-info/secondary-info.component';
import { GeneralInfoComponent } from 'src/app/features/shared-form/components/general-info/general-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ParentServiceFormComponent,
    GeneralInfoComponent,
    SecondaryInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedFormRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SharedFormModule {}
