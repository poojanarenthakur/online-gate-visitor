import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {
  dropdown = false;
  constructor() { }

  ngOnInit(): void {
  }
  profileToggle() {
    this.dropdown = !this.dropdown;
    console.log(this.dropdown);
  }
}
