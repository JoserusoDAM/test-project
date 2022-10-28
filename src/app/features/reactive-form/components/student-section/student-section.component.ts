import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-section',
  templateUrl: './student-section.component.html',
  styleUrls: ['./student-section.component.css'],
})
export class StudentSectionComponent implements OnInit {
  @Input() form!: UntypedFormGroup;

  constructor() {}

  ngOnInit(): void {}
}
