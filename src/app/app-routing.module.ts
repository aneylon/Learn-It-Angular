import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { WelcomeComponent } from './components/welcome/welcome.component'
import { UserLoginComponent } from './components/user/user-login/user-login.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'edit', component: EditComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
