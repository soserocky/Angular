import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.component.html',
  styleUrls: ['./lab3.component.css']
})
export class Lab3Component implements OnInit {
  public flag = false;
  public numbers = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

}
