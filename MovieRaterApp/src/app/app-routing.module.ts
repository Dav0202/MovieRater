import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CanActivateGuard } from './Guards/auth.guard';
import { AuthComponent } from './components/auth/auth.component';
import { EditMoviesComponent } from './components/edit-movies/edit-movies.component';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router'






const routes: Routes = [
  {path: '', component:DashboardComponent, canActivate:[CanActivateGuard]},
  {path: 'register', component:RegisterComponent},
  {path: 'auth', component:AuthComponent},
  {path: 'add-movies', component:AddMoviesComponent, canActivate:[CanActivateGuard]},
  {path: 'movie/:id', component:MovieDetailsComponent, canActivate:[CanActivateGuard]},
  {path: 'movie/edit/:id', component:EditMoviesComponent, canActivate:[CanActivateGuard]},
  {path: '**', component:NotFoundComponent, canActivate:[CanActivateGuard]},





];

@NgModule({
  declarations: [],
  exports:[
    RouterModule,
    CommonModule,
  ],
  imports: [

    RouterModule.forRoot(routes)
  ],
  providers: [CanActivateGuard]
})
export class AppRoutingModule { }
