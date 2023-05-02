import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder){
  }
  form!: FormGroup;
  
  genres = [{id:1 ,name:'Drama'},{id:2,name: 'Action'},{id:3, name: 'Comedy'}];
  
  movies = [
            {title: 'Spider-Man',Poster: 'https://cdn.pixabay.com/photo/2020/09/11/00/06/spiderman-5561671__340.jpg'},
            {title: 'Moana',Poster: 'https://www.filmibeat.com/fanimg/movie/15626/padman-2018-photos-images-59163.jpg'},
            {title: 'Inception',Poster: 'https://resizing.flixster.com/8X8J8sNXmCWDBaxo3vueONLRj00=/206x305/v2/https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg'}
          ]
  orignalMovies = this.movies;

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.form.valueChanges.subscribe(values => { 
      this.movies = this.orignalMovies;
      this.filterMovies(values);
     })
  }

   filterMovies(values: any){
    if(values.title){
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
   }

   clearForm(){
    this.form.reset();     
  }
}
