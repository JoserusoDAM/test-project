import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedFormService } from 'src/app/features/shared-form/services/shared-form/shared-form.service';
import { createPasswordStrengthValidator } from '../../forms/example-1.form';
import { SharedFormData } from '../../models/shared-form-data.model';

@Component({
  selector: 'app-parent-service-form',
  templateUrl: './parent-service-form.component.html',
  styleUrls: ['./parent-service-form.component.css'],
})
export class ParentServiceFormComponent implements OnInit, OnDestroy {
  private readonly subscription = new Subscription();
  constructor(public readonly form: SharedFormService) {}

  formData: SharedFormData = {
    name: 'Jose',
    age: 5,
    password: '123456Aa',
  };

  ngOnInit(): void {
    const sub = this.form.valueChanges.subscribe({
      next: (v) => console.log(v),
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    // COMENTAR PARA MOSTRAR DIFERENCIA CUANDO NO SE DESUSCRIBE
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    console.log(this.form.value);
    this.form.reset();
  }

  addValidators(): void {
    this.form.password.addValidators(createPasswordStrengthValidator());
    this.form.password.markAsTouched();
  }

  clearValidators(): void {
    for (const key in this.form.controls) {
      this.form.get(key)?.clearValidators();
      this.form.get(key)?.updateValueAndValidity();
    }

    this.form.markAllAsTouched();
  }
}
