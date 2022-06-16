import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Student } from '../student';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private registrationservice: RegistrationService, private router: Router) { }

  student: Student = new Student();
  emailid: string = '';
  msg: string = '';
  nameshow: boolean = false;
  passwordshow: boolean = false;
  mobileshow: boolean = false;
  ngOnInit(): void {
    if (!this.registrationservice.session) {
      this.router.navigate(['/registration'])
    }


  }



  name() {
    this.nameshow = true;
  }

  password() {
    this.passwordshow = true;
  }

  mobile() {
    this.mobileshow = true;
  }


  updatename() {
    this.registrationservice.nameupdate(this.emailid, this.student).subscribe(data => {
      console.log(this.student);
      alert(" Success");
      this.nameshow = false;
    }, error => this.msg = "Wrong Email");




  }

  updatepassword() {
    this.registrationservice.passwordupdate(this.emailid, this.student).subscribe(data => {
      alert(" Success");
      this.passwordshow = false;
    }, error => this.msg = "Wrong Email");

  }

  updatemobile() {
    this.registrationservice.mobileupdate(this.emailid, this.student).subscribe(data => {
      alert(" Success");
      this.mobileshow = false;
    }, error => this.msg = "Wrong Email");

  }

}
