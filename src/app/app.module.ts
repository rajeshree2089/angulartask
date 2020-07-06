import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogContentExampleDialogComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [
    DialogContentExampleDialogComponent
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
