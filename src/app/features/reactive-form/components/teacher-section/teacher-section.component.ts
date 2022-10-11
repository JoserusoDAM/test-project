import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-teacher-section',
  templateUrl: './teacher-section.component.html',
  styleUrls: ['./teacher-section.component.css'],
})
export class TeacherSectionComponent implements OnInit {
  @Input() form!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
