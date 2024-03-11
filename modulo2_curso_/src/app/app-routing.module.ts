import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AuthGuardsService } from './guards/auth-guards.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch:'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    loadChildren:()=>
    import('./modules/dashboard/dashboard.module').then(
      (m)=>m.DashboardModule
    ),
    canActivate:[AuthGuardsService]
  },
  {
    path:'suino',
    loadChildren:()=>
    import('./modules/suinos/suinos.module').then(
      (m)=>m.SuinosModule
    ),
    canActivate:[AuthGuardsService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
