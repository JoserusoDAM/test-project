import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.css'],
})
export class ErrorMsgComponent implements OnInit {
  @Input() control!: AbstractControl | FormControl | null;

  constructor() {}

  ngOnInit(): void {}
}
