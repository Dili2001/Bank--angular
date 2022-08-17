import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // prperty/variable
  header = 'Welcome to our bank'
  dot = '..........'
  accPlaceholder = 'Account number please'
  // acno
  acno = ""
  // password
  pswd = ""

  // database

  database: any = {
    1000: { acno: 1000, username: 'Max', password: 1000, balance: 5000 },
    1001: { acno: 1001, username: 'Joshua', password: 1001, balance: 5000 },
    1002: { acno: 1002, username: 'Elizbath', password: 1002, balance: 5000 }
  }

  constructor() { }

  ngOnInit(): void {
  }
  // user defined function 
  acnoChange(event: any) {
    this.acno = event.target.value
  }
  pswdChange(event: any) {
    this.pswd = event.target.value
  }

  login() {
    // fetch acno
    var acno = this.acno
    // fetch pswd
    var pswd = this.pswd
    let userDetails = this.database
    if (acno in userDetails) {
      if (pswd == userDetails[acno].password) {
        alert('Login successful')
      }
      else {
        alert('Incorrect Password')
      }
    }
    else {
      alert("User doesn't exist")
    }
  }
}
