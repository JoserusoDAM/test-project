import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NestedFormComponent } from './components/nested-form/nested-form.component';

const routes: Routes = [
  {
    path: '',
    component: NestedFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NestedFormRoutingModule {}
