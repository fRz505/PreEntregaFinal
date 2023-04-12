import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TablaModule } from '../tabla/tabla.module';
import { DialogModule } from '../dialog/dialog.module';
import {MatDialogModule} from '@angular/material/dialog';
import { DirectivesModule } from '../shared/directives/directives.module';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TablaModule,
    DialogModule,
    MatDialogModule,
    DirectivesModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
