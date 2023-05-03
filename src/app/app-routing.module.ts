import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablaComponent } from './tabla/tabla.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'estudiantes',
        component: TablaComponent,
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard/estudiantes',
  }
]


@NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
