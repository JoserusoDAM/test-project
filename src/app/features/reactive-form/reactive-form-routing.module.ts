import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateFromGuard } from 'src/app/shared/guard/can-deactivate-from.guard';
import { ReactiveFormComponent } from './views/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormComponent,
    canDeactivate: [CanDeactivateFromGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateFromGuard],
})
export class ReactiveFormRoutingModule {}
