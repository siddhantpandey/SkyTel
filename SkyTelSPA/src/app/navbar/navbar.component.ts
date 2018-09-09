import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  inputs: ['data']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
