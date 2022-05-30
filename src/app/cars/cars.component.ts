import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent{

  addCarStatus = false;
  carName = '';
  addCar(){
    this.addCarStatus = true;
  };

  constructor(){
  
  }
}
