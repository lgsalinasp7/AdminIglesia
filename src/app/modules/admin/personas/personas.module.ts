import { NgModule } from '@angular/core';
import { PersonasComponent } from './personas.component';
import { Route, RouterModule } from '@angular/router';

const PersonasRoutes: Route[] = [
  {
      path     : '',
      component: PersonasComponent
  }
];


@NgModule({
  declarations: [
    PersonasComponent
  ],
  imports     : [
    RouterModule.forChild(PersonasRoutes)
]
})
export class PersonasModule { }
