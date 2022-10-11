import { Component, OnInit } from '@angular/core';
import { SharedFormService } from 'src/app/features/shared-form/services/shared-form/shared-form.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css'],
})
export class GeneralInfoComponent implements OnInit {
  constructor(public readonly form: SharedFormService) {}

  ngOnInit(): void {}
}
