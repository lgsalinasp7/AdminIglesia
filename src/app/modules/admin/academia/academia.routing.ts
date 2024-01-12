import { Route } from '@angular/router';
import { AcademiaComponent } from './academia.component';
import { AcademyCategoriesResolver, AcademyCourseResolver, AcademyCoursesResolver } from './academia.resolvers';
import { AcademyListComponent } from './list/list.component';
import { AcademyDetailsComponent } from './details/details.component';

export const academyRoutes: Route[] = [
    {
        path     : '',
        component: AcademiaComponent,
        resolve  : {
            categories: AcademyCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: AcademyListComponent,
                resolve  : {
                    courses: AcademyCoursesResolver
                }
            },
            {
                path     : ':id',
                component: AcademyDetailsComponent,
                resolve  : {
                    course: AcademyCourseResolver
                }
            }
        ]
    }
];
