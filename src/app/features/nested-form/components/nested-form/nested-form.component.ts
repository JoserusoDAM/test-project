import { Component, OnInit } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';
import { NestedFormService } from 'src/app/features/nested-form/services/nested-form/nested-form.service';
import { createFormAdress } from '../../forms/adress-form.form';
import {
  AddressNestedFormData,
  NestedFormData,
} from '../../models/nested-form-data.model';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css'],
})
export class NestedFormComponent implements OnInit {
  mockForm: NestedFormData = {
    name: 'Carlos',
    lastName: 'Pérez',
    bankDetails: {
      bankName: 'ING',
      iban: 'ES9121000418450200051332',
    },
    address: [
      {
        number: '5',
        street: 'Américo Vespucio',
        zip: '41092',
      },
    ],
  };

  constructor(public readonly form: NestedFormService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form.value);
  }

  populateForm(form: NestedFormData): void {
    this.form.patchValue(form);
    this.form.setControl('address', this.setAddress(form.address));
    this.form.markAllAsTouched();
    this.form.markAsDirty();
  }

  setAddress(address: AddressNestedFormData[]): UntypedFormArray {
    const formArray = new UntypedFormArray([]);
    address.forEach((data) => formArray.push(createFormAdress(data)));
    return formArray;
  }
}
