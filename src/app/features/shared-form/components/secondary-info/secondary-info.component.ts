import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SharedFormService } from 'src/app/features/shared-form/services/shared-form/shared-form.service';

@Component({
  selector: 'app-secondary-info',
  templateUrl: './secondary-info.component.html',
  styleUrls: ['./secondary-info.component.css'],
})
export class SecondaryInfoComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();
  constructor(public readonly form: SharedFormService) {}

  ngOnInit(): void {
    // const sub = this.form.form.valueChanges.subscribe((v) => {
    //   if (v.age && v.age > 18) {
    //     this.form.form.addControl(
    //       'parentName',
    //       new FormControl('', Validators.required)
    //     );
    //   } else {
    //     this.form.form.removeControl('parentName');
    //   }
    // });
    // this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
