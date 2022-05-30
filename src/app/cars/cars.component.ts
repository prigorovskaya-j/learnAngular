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
  cars = ['Ford', 'Audi', 'BMW', 'Mitsubishi', 'B', 'C', 'D'];
  dates  = [
    new Date(2015, 3, 4).toDateString(),
    new Date(2014, 3, 4).toDateString(),
    new Date(2015, 2, 1).toDateString(),
    new Date(2017, 9, 9).toDateString()
  ];
 
  addCar(){
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  };

  constructor(){
  
  }
}
