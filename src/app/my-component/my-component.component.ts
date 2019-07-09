import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  interploation: string = "Interpolation Example";
  attValue: string = "Some random value";
  twoWay: string = "";

  constructor() { }

  ngOnInit() {
  }

  onInputChange(event: any){
    alert(event.target.value)
  }

}
