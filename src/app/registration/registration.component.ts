import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Student } from '../student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  student: Student = new Student();
  message: string = '';
  constructor(private registrationservice: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  loginstudent() {
    this.registrationservice.studentlogin(this.student).subscribe(data => {
      alert("Login Success");
      this.router.navigate(['/dashboard']);
    }, error => this.message = "Invalid Login");

  }

  registerstudent() {
    this.registrationservice.studentregister(this.student).subscribe(data => {
      alert("Registration Success");
      return this.login();


    }, error => this.message = "User Already exist");
    return this.login();

  }



  register() {
    var x = document.getElementById("login") as HTMLBodyElement;
    var y = document.getElementById("register") as HTMLBodyElement;
    var z = document.getElementById("btn") as HTMLBodyElement;
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  }

  login() {
    var x = document.getElementById("login") as HTMLBodyElement;
    var y = document.getElementById("register") as HTMLBodyElement;
    var z = document.getElementById("btn") as HTMLBodyElement;
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";

  }
}
