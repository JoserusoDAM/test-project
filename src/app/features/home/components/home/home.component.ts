import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: string[] = [];

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = this.activatedRoute.snapshot.data['user'];
  }
}
