import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="col-xs-8 col-xs-offset-2">
    <input type="text" class="form-control" [(ngModel)]="searchCar">
    <button class="btn btn-primary" (click)="addCar()">Add</button>
    <hr>
    <ul class="list-group">
      <li 
      class="list-group-item"
      *ngFor="let car of cars
      | carFilter:searchCar:'descr'; 
      let i = index"
      
      > <b>{{i+1}} - {{car.name}} <i>{{car.descr}}</i></b></li>
    </ul>
  </div>`
})
export class AppComponent {
  searchCar = '';
  cars = [
    {name: 'Ford', descr: '1'},
    {name: 'Mazda', descr: '2'},
    {name: 'Audi', descr: '3'},
    {name: 'BMW', descr: '4'}
  ];
  addCar(){
    this.cars.push({
      name: 'New Car',
      descr: '0'
    })
  }
}
