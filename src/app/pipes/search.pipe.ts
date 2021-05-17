import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employee:any, text:string ) {
    return employee.filter(function(em){
      return em.name.toLowerCase().includes(text.toLowerCase()) ||
      em.role.toLowerCase().includes(text.toLowerCase()) ||em.email.toLowerCase().includes(text.toLowerCase())  ;
    })
  }


}
