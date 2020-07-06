import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  backlogs = [
    'Task1',
    'Task2',
    'Task3',
    'Task4',
    'Task5'
  ];

  developement = [
    'Task6',
    'Task7',
    'Task8',
    'Task9'
  ];

  codereview = [
    'Task10',
    'Task11',
    'Task12',
    'Task13'
  ];

  acceptance = [
    'Task15',
    'Task16'
   
  ];
 
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  constructor(public dialog: MatDialog) {}

  sendValue : string = "Add Task";
  tmp : string;
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
      width: '350px',
      disableClose:true,
      data: { pageValue: this.sendValue }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.backlogs.push(result.data);
     
     
    });

  }

  

}


