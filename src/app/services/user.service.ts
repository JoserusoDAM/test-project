import { Injectable } from '@angular/core';
import { delay, Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$!: Observable<string[]>;
  getUsers(): Observable<string[]> {
    if (!this.user$) {
      this.user$ = of(['Jose', 'Favio']).pipe(delay(1000), shareReplay());
    }
    return this.user$;
  }
}
