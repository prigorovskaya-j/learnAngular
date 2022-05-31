import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchStr: string, fieldName: string) {
    console.log('pipe')
    if (carList.length ===0 || searchStr === ''){
      return carList;
    }
    return carList.filter(car => car.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1)
  }

}
