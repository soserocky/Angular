import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab2',
  templateUrl: './lab2.component.html',
  styleUrls: ['./lab2.component.css']
})
export class Lab2Component implements OnInit {
  public classFlag: boolean = false; 
  constructor() { }

  ngOnInit(): void {
  }
  getColor(flag: number): string {
    if (flag === 1) {
      return 'green';
    }
    return 'red';
  }
}
