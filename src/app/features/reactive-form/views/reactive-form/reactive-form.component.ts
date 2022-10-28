import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { countries } from 'src/app/mocks/countries';
import { SharedFormService } from 'src/app/features/shared-form/services/shared-form/shared-form.service';
import { CanDeactivateFromGuard } from 'src/app/shared/guard/can-deactivate-from.guard';
import { Observable } from 'rxjs';
import { ExtraInfoFormData } from '../../models/extra-info-form-data.model';
import { ReactiveFormData } from '../../models/reactive-form-data.model';
import { createExtraInfoForm } from '../../form/reactive-form.form';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  countries = countries;

  form = this.initForm();

  get nameControl() {
    return this.form.get('name') as FormControl<string>;
  }

  get lastNameControl() {
    return this.form.get('lastName') as FormControl<string>;
  }

  get userNameControl() {
    return this.form.get('userName') as FormControl<string>;
  }

  get cityControl() {
    return this.form.get('city') as FormControl<string>;
  }

  get countryControl() {
    return this.form.get('country') as FormControl<string>;
  }

  get zipControl() {
    return this.form.get('zip') as FormControl<number>;
  }

  get termsControl() {
    return this.form.get('terms') as FormControl<boolean>;
  }

  get extraInfo() {
    return this.form.get('extraInfo') as FormArray<
      FormGroup<{
        title: FormControl<string | null>;
        level: FormControl<number | null>;
      }>
    >;
  }

  constructor(
    private readonly fb: NonNullableFormBuilder,
    public readonly formSvc: SharedFormService,
    public readonly canDeactivateFromGuard: CanDeactivateFromGuard
  ) {}

  ngOnInit(): void {}

  canDeactivate(): true | Observable<boolean> {
    return this.canDeactivateFromGuard.canDeactivateForm(this.form);
  }

  initForm() {
    return this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      // name: this.fb.control('', [
      //   Validators.required,
      //   Validators.minLength(3),
      //   Validators.maxLength(25),
      // ]),
      // lastName: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.minLength(3),
      //     Validators.maxLength(25),
      //   ],
      // ],
      lastName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
      ]),
      userName: this.fb.control('', [Validators.required, Validators.email]),
      // userName: ['', [Validators.required, Validators.email]],
      city: this.fb.control(''),
      // city: [''],
      country: this.fb.control('', [Validators.required]),
      // country: ['', Validators.required],
      zip: this.fb.control({ value: 0, disabled: true }),
      // zip: [
      //   {
      //     value: 123456,
      //     disabled: true,
      //   },
      // ],
      terms: this.fb.control(false, [Validators.requiredTrue]),
      // terms: [false, Validators.requiredTrue],
      // extraInfo: this.fb.array([createExtraInfoForm()]),
      extraInfo: this.fb.array<
        FormGroup<{
          title: FormControl<string | null>;
          level: FormControl<number | null>;
        }>
      >([]),
    });
  }

  onSubmit(event: SubmitEvent): void {
    if (event.submitter?.getAttribute('name') === 'submit') {
      console.log('Formulario enviado', this.form.value);
    }

    this.form.markAllAsTouched();
    console.log(this.form.value);
    console.log(this.form.getRawValue());
  }

  addExtraInfo(): void {
    const extraInfoForm = createExtraInfoForm();
    this.extraInfo.push(extraInfoForm);
  }

  removeExtraInfo(index: number): void {
    this.extraInfo.removeAt(index);
  }

  disableForm(): void {
    this.form.disable();
  }

  resetForm(): void {
    this.form.reset();
    this.extraInfo.clear();
    this.form.enable();
  }

  setError(): void {
    // PODEMOS PONER UN ERROR DE LOS QUE EXISTEN O UN NOMBRE PROPIO Y LUEGO EN EL OBJETO ERRORS BUSCAR
    // ESA KEY PARA MOSTRAR EL ERROR CONCRETO
    this.nameControl.setErrors({
      customError: true,
    });
    this.nameControl.markAsTouched();
  }

  removeValidators(): void {
    // ELIMINAR UN VALIDADOR UNICAMENTE
    // this.nameControl.clearValidators();
    // this.nameControl.updateValueAndValidity();

    // ELIMINAR TODOS LOS VALIDADORES DEL FORMULARIO
    for (const key in this.form.controls) {
      this.form.get(key)?.clearValidators();
      this.form.get(key)?.updateValueAndValidity();
    }

    // TODO: Eliminar los validadores de un formArray sin necesidad de ponerle el nombre
    Object.keys(this.extraInfo.controls).forEach((index) => {
      this.extraInfo.at(Number(index)).get('title')?.clearValidators();
      this.extraInfo.at(Number(index)).get('title')?.updateValueAndValidity();
    });
  }

  fillForm(): void {
    const formData: ReactiveFormData = {
      name: 'John',
      lastName: 'Doe',
      userName: 'jdoe@nttdata.com',
      city: 'Sevilla',
      country: 'España',
      zip: 12345,
      terms: true,
      extraInfo: [
        {
          title: 'Titulo 1',
          level: 25,
        },
        {
          title: 'Titulo 2',
          level: 100,
        },
        {
          title: 'Titulo 3',
          level: 75,
        },
      ],
    };

    this.form.patchValue(formData);

    this.form.setControl('extraInfo', this.setExtraInfo(formData.extraInfo));
    this.form.markAllAsTouched();
    this.form.markAsDirty();
  }

  setExtraInfo(extraInfo: ExtraInfoFormData[]) {
    // FIXME: De esta forma me esta creando un formGroup vacio y no lo necesito

    const formArray = new FormArray<
      FormGroup<{
        title: FormControl<string | null>;
        level: FormControl<number | null>;
      }>
    >([]);
    extraInfo.forEach((data) => formArray.push(createExtraInfoForm(data)));
    return formArray;
  }
}
