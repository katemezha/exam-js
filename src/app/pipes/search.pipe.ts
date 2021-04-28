import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

	transform(items: any, searchStr: string): any {
    if(searchStr === ''){
      console.log('search')
      items.sort((prev: any, next: any): any=>{
        if(prev.surname < next.surname) return -1;
        if(prev.surname > next.surname) return 1;
      })
      return items;
    }else{
      let filteredItemsSurname = items.filter(
        (e: any) => e.surname.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
      );
      return filteredItemsSurname;
    }
  }

}
