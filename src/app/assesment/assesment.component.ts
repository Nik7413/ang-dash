import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.css']
})
export class AssesmentComponent implements OnInit {

  constructor(private shared: SharedService) { }


  ngOnInit(): void {
  }

  physics(){
    this.shared.physhow = true;
    this.shared.cheshow = false;
    this.shared.mathshow = false;
    this.shared.javashow = false;
    this.shared.jsshow = false;
    this.shared.htmlshow = false;
    this.shared.cssshow = false;
  }
  chemistry(){
    this.shared.physhow = false;
    this.shared.cheshow = true;
    this.shared.mathshow = false;
    this.shared.javashow = false;
    this.shared.jsshow = false;
    this.shared.htmlshow = false;
    this.shared.cssshow = false;
  }
  maths(){
    this.shared.physhow = false;
    this.shared.cheshow = false;
    this.shared.mathshow = true;
    this.shared.javashow = false;
    this.shared.jsshow = false;
    this.shared.htmlshow = false;
    this.shared.cssshow = false;
  }
  java(){
    this.shared.physhow = false;
    this.shared.cheshow = false;
    this.shared.mathshow = false;
    this.shared.javashow = true;
    this.shared.jsshow = false;
    this.shared.htmlshow = false;
    this.shared.cssshow = false;
  }
  javascript(){
    this.shared.physhow = false;
    this.shared.cheshow = false;
    this.shared.mathshow = false;
    this.shared.javashow = false;
    this.shared.jsshow = true;
    this.shared.htmlshow = false;
    this.shared.cssshow = false;
  }
  html(){
    this.shared.physhow = false;
    this.shared.cheshow = false;
    this.shared.mathshow = false;
    this.shared.javashow = false;
    this.shared.jsshow = false;
    this.shared.htmlshow = true;
    this.shared.cssshow = false;
  }
  css(){
    this.shared.physhow = false;
    this.shared.cheshow = false;
    this.shared.mathshow = false;
    this.shared.javashow = false;
    this.shared.jsshow = false;
    this.shared.htmlshow = false;
    this.shared.cssshow = true;
  }
}
