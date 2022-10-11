import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () =>
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree;
}

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateFromGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(
    component: CanComponentDeactivate,
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

  canDeactivateForm(form: FormGroup): true | Observable<boolean> {
    if (form?.disabled || form?.dirty) {
      const result = window.confirm(
        '¡Tienes cambios sin guardar! ¿Estás segudo que quieres salir?'
      );

      return of(result);
    }
    return true;
  }
}
