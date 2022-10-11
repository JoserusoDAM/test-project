import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from 'src/app/shared/resolver/user.resolver';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      user: UserResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
