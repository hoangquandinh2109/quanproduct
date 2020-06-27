import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutManagementComponent } from './layout-management.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutManagementComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../management-views/management-views.module').then(m => m.ManagementViewsModule)
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutManagementRoutingModule { }
