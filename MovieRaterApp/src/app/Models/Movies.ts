export interface Movie {
    id:number
    Title: string
    Description : string,
    no_of_rating :number,
    avg_rating : number,

}

//const httpoptions = {
  //headers : new HttpHeaders({
   // 'Content-Type' : 'application/json',
    ////Authorization' : 'Token 73304c036880ac40d647aee7bcef95a9990f5a9d'
  //})
//}






//@Injectable({
//    providedIn: 'root'
//  })
//  export class ApiService {
//    baseurl2 : string= 'http://127.0.0.1:8000/';
//    token = this.cookieservice.get('mr-token')
//    headers = new HttpHeaders({
//      'Content-Type' : 'application/json',
//      });
//  
//  
//    
//    baseurl : string= 'http://127.0.0.1:8000/api/movie/';
//    //private logsource = new BehaviorSubject<Movie>({id:null , Title:null, Description:null, no_of_rating:null, 
//    //  avg_rating:null});
//    //selectedmovie = this.logsource.asObservable()
//    constructor(
//      private http : HttpClient,
//      private cookieservice: CookieService
//    ) { 
//  
//    }
//    getMovies(): Observable<Movie[]>{
//      return this.http.get<Movie[]>(this.baseurl,{headers : this.getauth()});
//    }
//  
//    addMovie(movie:Movie): Observable<Movie>{
//      return this.http.post<Movie>(`${this.baseurl}`, movie, {headers : this.getauth()});
//    }
//  
//    updateMovie(movie: Movie,id: number ): Observable<Movie>{
//      const body = JSON.stringify(movie);
//      return this.http.put<Movie>(`${this.baseurl}${id}/`, body,{headers : this.getauth()});
//        
//    }
//    //updateMovie(id: number, title: string, description: string) {
//    //  const body = JSON.stringify({title, description});
//    //  return this.httpClient.put(`${this.baseMovieUrl}${id}/`, body, {headers: this.getAuthHeaders()});
//    //
//   // setmovie(movie:Movie){
//   //   this.logsource.next(movie);
//   // }
//  
//    getMovie(id: number) :Observable<Movie> {
//      const url = `${this.baseurl}${id}/`;
//  
//      return this.http.get<Movie>(url,{headers : this.getauth()});
//    }
//    
//    //rateMovies(): Observable<Movie[]>{
//     // return this.http.get<Movie[]>(this.baseurl, {headers: this.headers});
//   // }
//  
//   removemovie(id: number):Observable<Movie>{
//     return this.http.delete<Movie>(`${this.baseurl}${id}/`, {headers : this.getauth()})
//   }
//  
//   rateClicked(rate:number,id:number ){
//    const url = `${this.baseurl}${id}/rate_movie/`;
//    const body = JSON.stringify({star:rate})
//    return this.http.post(url, body, {headers : this.getauth()});
//  
//   }
//   getauth(){
//    const token = this.cookieservice.get('mr-token')
//    return  new HttpHeaders({
//      'Content-Type' : 'application/json',
//       Authorization : `Token ${token}`
//      });
//  
//  }
//  
//    
//  }