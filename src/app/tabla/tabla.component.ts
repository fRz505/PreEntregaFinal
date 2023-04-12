import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


export class Alumno {
  name: string;
  position: number;
  lastname: string;
  inscription: Date;
}

const ELEMENT_DATA: Alumno[] = [
  {position: 1, name: 'Lucas', lastname: 'Sanchez', inscription: new Date()},
  {position: 2, name: 'Emilio', lastname: 'Cardona', inscription: new Date() },
  {position: 3, name: 'Nahuel', lastname: 'Rojas', inscription: new Date()},
  {position: 4, name: 'Tomas', lastname: 'Beltran', inscription: new Date()},
  {position: 5, name: 'Marcos', lastname: 'Palavecino', inscription: new Date()},
  {position: 6, name: 'Giyu', lastname: 'Tomioka', inscription: new Date()},
  {position: 7, name: 'Rodrigo', lastname: 'Diaz', inscription: new Date()},
  {position: 8, name: 'Enrique', lastname: 'Gimenez', inscription: new Date()},
  {position: 9, name: 'Luca', lastname: 'Molina', inscription: new Date()},
  {position: 10, name: 'Javier', lastname: 'Barq', inscription: new Date()},
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {


  displayedColumns: string[] = ['accion', 'position', 'nombreCompleto', 'inscription'];
  dataSource = new MatTableDataSource<Alumno>(ELEMENT_DATA)
  selection = new SelectionModel<Alumno>(true, []);

  @ViewChild(MatTable) table: MatTable<Alumno>;

  constructor(public dialog: MatDialog) {

    
    
  }


  eliminar(row: Alumno) {
    console.log(row);
    var index = this.dataSource.filteredData.findIndex(a => a.position === row.position)
    
    this.dataSource.filteredData.splice(index, 1);

   

    this.table.renderRows();
  }
  openDialog(mode: string, row) {
    const dialogRef = this.dialog.open(DialogComponent,{
      data: {
        mode: mode,
        alumno: row
      },
      height: '400px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(
      (res: any)=>{
        // Receive data from dialog component
        // res contains data sent from the dialog
        console.log(res);
       
        res.alumno.position =  this.dataSource.filteredData.length + 1;

        
        if (res.mode === 'add') {
          this.dataSource.filteredData.push(res.alumno);
        } else {

          // this.dataSource.filteredData.forEach((e, i) => {
          //   if(e[i].position === res.alumno.position) {
          //     console.log(i);
              
          //     e[i].name = res.alumno.name;
          //     e[i].lastname = res.alumno.lastname;
          //     e[i].inscription = res.alumno.inscription;
          //   }
          // })

          
          
        }
        this.table.renderRows();
      }
    );
  }


  
}
