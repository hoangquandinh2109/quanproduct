import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGuard } from './helpers/auth.guard';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SessionTimeoutComponent } from './pages/session-timeout/session-timeout.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./layouts/layout-client/layout-client.module').then(m => m.LayoutClientModule) },
  {
    path: 'quantrivien', loadChildren: () => import('./layouts/layout-management/layout-management.module').then(m => m.LayoutManagementModule),
    canActivate: [AuthGuard]
  },
  { path: 'dangnhap', component: SignInComponent },
  { path: 'sessiontimeout', component: SessionTimeoutComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
