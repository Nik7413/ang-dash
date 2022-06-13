import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  physhow: boolean = false;
  cheshow: boolean = false;
  mathshow: boolean = false;
  javashow: boolean = false;
  jsshow: boolean = false;
  htmlshow: boolean = false;
  cssshow: boolean = false;


  p: number = 0;
  c: number = 0;
  m: number = 0;
  j: number = 0;
  js: number = 0;
  h: number = 0;
  cs: number = 0;
  constructor() { }
}
