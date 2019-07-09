import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purepipedemo',
  templateUrl: './purepipedemo.component.html',
  styleUrls: ['./purepipedemo.component.css']
})
export class PurepipedemoComponent implements OnInit {

  data: string = "This is some data to the pipe";
  constructor() { }

  ngOnInit() {
  }

}
