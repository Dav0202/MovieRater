import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './../../services/api.service';
import { Movie } from './../../Models/Movies';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movie : Movie[];
  constructor(
    private apiservice : ApiService,
    private router: Router,
    private cookieservice: CookieService,

    ) { }

  stars: number[] = [1,2,3,4,5];
  selectedvalue:number;


  ngOnInit(): void {
    const mrtoken= this.cookieservice.get('mr-Token')
      this.apiservice.getMovies()
      .subscribe(movie =>{
        this.movie = movie
        this.router.navigate(['/']);
      });
      
  }

  countstar(star){
    this.selectedvalue = star;
    console.log(star)
  }

  rateclicked(rate){
    //this.apiservice.rateclick()
     // .subscribe(movie => this.movie = movie);

  }

  //onSelect(movie:Movie){
  //  this.apiservice.setmovie(movie);

 // }
  removeMovie(movie:Movie){
    if (confirm('Are You Sure you want to Remove Movie')) {
      this.apiservice.removemovie(movie.id)
        .subscribe(() => {}

        );
        this.router.navigate(['/']);
        location.reload();
        console.log('Movie Deleted');

    }

  }

}
