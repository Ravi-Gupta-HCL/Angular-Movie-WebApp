import { Component, OnInit } from '@angular/core';
import { movieCreationDTO } from '../movies.model';
import { MoviesService } from '../movies.service';
import { multipleselectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  constructor( private movieService: MoviesService, private router: Router){}

  nonSelectedGenres: multipleselectorModel[] = [];
  nonSelectedMovieTheaters: multipleselectorModel[] = [];

  ngOnInit(): void {
  this.movieService.postGet().subscribe( response => {
    this.nonSelectedGenres = response.genres.map( genres => {
          return <multipleselectorModel>{key: genres.id, value: genres.name}
      });
      
      this.nonSelectedMovieTheaters = response.movieTheaters.map(movieTheaters => {
        return <multipleselectorModel>{key: movieTheaters.id, value: movieTheaters.name}
      });
    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO){
    console.log(movieCreationDTO);
    this.movieService.create(movieCreationDTO).subscribe((id)=>{
      this.router.navigate(['/movie/'+ id]);
    });
  }
}
