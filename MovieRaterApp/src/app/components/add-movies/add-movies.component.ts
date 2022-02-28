import { ApiService } from './../../services/api.service';
import { Movie } from './../../Models/Movies';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent implements OnInit {
  movie : Movie = {
    id : 0,
    Title :'',
    Description : '',
    no_of_rating : 0,
    avg_rating : 0,
  };
  @ViewChild('movieform') form:any;
  
  
  constructor(
    private apiservice: ApiService,
    private router: Router,
    ) { }
   
  ngOnInit(): void {
  
    
  }
  onSubmit({value,valid}:{value:Movie, valid:Boolean}){
    this.apiservice.addMovie(value)
      .subscribe(movie => console.log(movie))
      this.router.navigate(['/']);
  }
 

   // this.apiservice.rateMovies(rate,this.movie.id)
     // .subscribe(result => {this.result = result , console.log(rate)}
       // );
    

  //}

 


}
