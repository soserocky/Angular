import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css'],
})
export class Lab1Component implements OnInit {
  public message: string = '';
  public isEnabled = true;
  constructor() {}

  ngOnInit(): void {
    this.message = 'This is due to string interpolation.';
    this.disableClickMe();
  }
  disableClickMe() {
    window.setTimeout(() => {
      this.isEnabled = false;
    }, 5000);
  }
  enableClickMe(event: Event) {
    this.isEnabled = true;
    this.disableClickMe();
  }
}
