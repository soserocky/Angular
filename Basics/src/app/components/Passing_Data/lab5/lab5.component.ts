import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lab5',
  templateUrl: './lab5.component.html',
  styleUrls: ['./lab5.component.css']
})
export class Lab5Component implements OnInit {

  @Input() public data: string = '';
  @Output() public eventEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: Event) {
    this.eventEmitter.emit('Data from Lab5');
  }
}
