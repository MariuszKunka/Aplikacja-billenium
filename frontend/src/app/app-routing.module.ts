import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { WyszukajComponent } from './wyszukaj/wyszukaj.component';
import { PrzepisComponent } from './przepis/przepis.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserhomeComponent},
  {path: 'dodaj', component: DodajComponent},
  {path: 'wyszukaj', component: WyszukajComponent},
  {path: 'przepis', component: PrzepisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
