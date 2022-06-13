import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  physhow:boolean = false;
  cheshow:boolean = false;
  mathshow:boolean = false;
  javashow: boolean = false;
  jsshow: boolean = false;
  htmlshow: boolean = false;
  cssshow : boolean = false;
  constructor() { }
}
