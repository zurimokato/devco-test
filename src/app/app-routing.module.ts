import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginAccessGuard } from './guards/login-access.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path:'login',
    loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule),
    canActivate:[LoginAccessGuard]
    
  },
  {
    path:'home',
    loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'recruiter',
    loadChildren:()=>import('./pages/recruiter/recruiter.module').then(m=>m.RecruiterModule),
   
  },
  {
    path:'candidate',
    loadChildren:()=>import('./pages/candidate/candidate.module').then(m=>m.CandidateModule)

  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
