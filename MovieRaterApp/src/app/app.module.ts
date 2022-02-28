import { AuthService } from './services/auth.service';
import { Routes } from '@angular/router';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { EditMoviesComponent } from './components/edit-movies/edit-movies.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component'
import { CookieService } from 'ngx-cookie-service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddMoviesComponent,
    MovieDetailsComponent,
    EditMoviesComponent,
    DashboardComponent,
    AuthComponent,
    NotFoundComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    ApiService,
    AuthService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
