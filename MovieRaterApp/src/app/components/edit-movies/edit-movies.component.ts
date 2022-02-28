import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Movie } from './../../Models/Movies';
import { Location } from '@angular/common'


@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent implements OnInit {
  stars: number[] = [1,2,3,4,5];
  selectedvalue:number;

  movie : Movie = {
    id : 0,
    Title :'',
    Description : '',
    no_of_rating : 0,
    avg_rating : 0,
  };
  @ViewChild('movieform') form:any;

  constructor(private apiservice : ApiService,
    private route :ActivatedRoute,
    private location: Location,
    private router: Router,
     ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
  //this.apiservice.selectedmovie.subscribe(movie => {
  //  if (movie.id !== null) {
  //    this.id = movie.id;
  //    this.Title = movie.Title;
  //    this.Description = movie.Description;
  //    console.log(movie.id)//
  //  }//
  //
  //});
    this.apiservice.getMovie(id)
      .subscribe((movie => this.movie = movie));
    
 
  }
  
  onSubmit({value,valid}:{value:Movie,valid:boolean}){
    //this.postService.updatePost(this.currentPost).subscribe(post => {
    //  console.log(post);
    //  this.isEdit = false;
    //  this.updatedPost.emit(post);
      
      // Update client
      this.apiservice.updateMovie(value,this.movie.id).subscribe(movie => {console.log(movie)});
      this.router.navigate(['/']);
  }

  
}
