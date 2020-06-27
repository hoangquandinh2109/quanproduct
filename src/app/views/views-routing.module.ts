import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { Index2Component } from './index/index2.component';

const routes: Routes = [
    { path: '',component: IndexComponent },
    { path: 'index2',component: Index2Component }
    // { path: 'tracuudiemthi',component: IndexComponent },
    // { path: 'phodiem',component: IndexComponent },
    // { path: 'tracuuthongtinvanbang',component: IndexComponent },
    // { path: 'xemthongtinvanbang',component: IndexComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ViewsRoutingModule { }
