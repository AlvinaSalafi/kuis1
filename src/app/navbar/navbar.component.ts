import { Component, OnInit } from '@angular/core';
import { Data } from'../shared/data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  navbar = 'Navbar';
  home ='Home';
  master ='MasterData';

  constructor() { }

  ngOnInit() {
  }
}