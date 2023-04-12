import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/tabla/tabla.component';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    return `${value.name} ${value.lastname}`;
  }

}
