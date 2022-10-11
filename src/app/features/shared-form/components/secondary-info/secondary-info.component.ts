import { Component, OnInit } from '@angular/core';
import { SharedFormService } from 'src/app/features/shared-form/services/shared-form/shared-form.service';

@Component({
  selector: 'app-secondary-info',
  templateUrl: './secondary-info.component.html',
  styleUrls: ['./secondary-info.component.css'],
})
export class SecondaryInfoComponent implements OnInit {
  constructor(public readonly form: SharedFormService) {}

  ngOnInit(): void {}
}
