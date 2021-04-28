import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDirection'
})
export class SearchDirectionPipe implements PipeTransform {

  transform(items: any, searchStrDirection: number): any {
      if( (searchStrDirection == 0) || (searchStrDirection == 1) ){
        console.log('searchDirection WORK')
      console.log(searchStrDirection)
      console.log(items)
      let filteredItemsDirection = items.filter(
        (e: any) => e.direction.toString().indexOf(searchStrDirection) !== -1
      );
      return filteredItemsDirection;
      
    }else{
      console.log(searchStrDirection)
      return items;
    }
  }

}
