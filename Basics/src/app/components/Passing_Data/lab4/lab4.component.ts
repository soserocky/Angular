import { Component, OnInit } from '@angular/core';
import { Lab5Component } from './../lab5/lab5.component';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})
export class Lab4Component implements OnInit {

  public outputData: string = 'No data passed till now';
  constructor() { }

  ngOnInit(): void {
    
  }
  onEventEmitted(arg: string) {
    this.outputData = arg;
  }
}
