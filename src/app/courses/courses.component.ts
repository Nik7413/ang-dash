import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  constructor(private registrationservice: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    if (!this.registrationservice.session) {
      this.router.navigate(['/registration'])
    }
  }

}
