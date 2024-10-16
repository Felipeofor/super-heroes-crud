import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {authGuard} from "../app/guard/authGuard.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, canActivate: [authGuard]
  },
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [authGuard]
})
export class AppRoutingModule {
}
