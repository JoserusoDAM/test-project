import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ParentServiceFormComponent } from './views/parent-service-form/parent-service-form.component';

const routes: Routes = [
  {
    path: '',
    component: ParentServiceFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedFormRoutingModule {}
