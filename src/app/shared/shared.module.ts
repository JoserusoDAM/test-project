import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMsgComponent } from './error_msg/error-msg.component';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [ErrorMsgComponent, NavbarComponent, LoaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [ErrorMsgComponent, NavbarComponent, LoaderComponent],
})
export class SharedModule {}
