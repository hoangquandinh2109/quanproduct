import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MngMonThiComponent } from './monthi-demo/mng-monthi.component';
import { MngImportKetQuaThiComponent } from './mng-importketquathi/mng-importketquathi.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'importketquathi', component: MngImportKetQuaThiComponent },
    { path: 'quanlytracuuvanbang', component: DashboardComponent },
    {
        path: 'tailieuonline', children: [
            { path: 'trangchu', component: DashboardComponent },
            { path: 'tracuutailieu', component: DashboardComponent },
            { path: 'doingusupport', component: DashboardComponent },
            { path: 'cauhoithuonggap', component: DashboardComponent }
        ]
    },
    { path: 'phancongchuyenmon', component: DashboardComponent },
    { path: 'monthi', component: MngMonThiComponent }//demo
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementViewsRoutingModule { }
