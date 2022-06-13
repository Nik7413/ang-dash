import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private shared: SharedService, private registrationservice: RegistrationService, private router: Router) { }
  physhow: boolean = this.shared.physhow;
  cheshow: boolean = this.shared.cheshow;
  mathshow: boolean = this.shared.mathshow;
  javashow: boolean = this.shared.javashow;
  jsshow: boolean = this.shared.jsshow;
  htmlshow: boolean = this.shared.htmlshow;
  cssshow: boolean = this.shared.cssshow;

  ngOnInit(): void {
    if (!this.registrationservice.session) {
      this.router.navigate(['/registration'])
    }
  }

  phyQuestion = [
    { question: 'Physics', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },

  ]
  cheQuestion = [
    { question: 'Chemistry', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },

  ]
  mathQuestion = [
    { question: 'Math', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },

  ]
  javaQuestion = [
    { question: 'Java', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },

  ]
  jsQuestion = [
    { question: 'JavaScript', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },

  ]
  cssQuestion = [
    { question: 'CSS', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },

  ]
  htmlQuestion = [
    { question: 'HTML', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },
    { question: 'lorem23lspajdoasdjsaaskfjdsfdskfdsjfkdsf', optionA: 'klsdklasjdksddskdasksdk', optionB: 'klsdklasjdksddskdasksdk', optionC: 'klsdklasjdksddskdasksdk', optionD: 'klsdklasjdksddskdasksdk' },

  ]
}