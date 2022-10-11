import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'reactive-form',
    loadChildren: () =>
      import('./features/reactive-form/reactive-form.module').then(
        (m) => m.ReactiveFormModule
      ),
  },
  {
    path: 'service-form',
    loadChildren: () =>
      import('./features/shared-form/shared-form.module').then(
        (m) => m.SharedFormModule
      ),
  },
  {
    path: 'nested-form',
    loadChildren: () =>
      import('./features/nested-form/nested-form.module').then(
        (m) => m.NestedFormModule
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
