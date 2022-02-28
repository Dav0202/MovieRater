import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Movie } from './../../Models/Movies';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  
  stars: number[] = [1,2,3,4,5];
  selectedvalue:number;
 
  
  movie : Movie = {
    id : 0,
    Title :'',
    Description : '',
    no_of_rating : 0,
    avg_rating : 0,
  };

  
  constructor(
    private apiservice: ApiService,
    private router: Router,
    private route :ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiservice.getMovie(id)
      .subscribe((movie => this.movie = movie));

  }
  countstar(star){
    this.selectedvalue = star;
    console.log(star)
  }
  
  rateclicked(rate:number){
    this.apiservice.rateClicked(rate,this.movie.id)
    .subscribe(result => {console.log(result)});
      ;
      this.router.navigate(['/']);
    
    
  }
  
}