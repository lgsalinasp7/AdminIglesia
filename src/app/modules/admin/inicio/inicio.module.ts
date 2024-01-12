import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio.component';
import { Route, RouterModule } from '@angular/router';

const inicioRoutes: Route[] = [
  {
      path     : '',
      component: InicioComponent
  }
];

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports     : [
    RouterModule.forChild(inicioRoutes)
]
})
export class InicioModule { }
