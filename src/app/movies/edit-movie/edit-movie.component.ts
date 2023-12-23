import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { multipleselectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { actorsMovieDTO } from 'src/app/actors/actors.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private router: Router
    ){  }

  model!: movieDTO;
  selectedGenres!: multipleselectorModel[];
  nonSelectedGenres!: multipleselectorModel[];
  selectedMovieTheaters: multipleselectorModel[] = [];
  nonSelectedMovieTheaters!: multipleselectorModel[];
  selectedActors!: actorsMovieDTO[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.movieService.putget(params['id']).subscribe((putGetDTO)=>{
          this.model= putGetDTO.movie;

        this.selectedGenres = putGetDTO.selectedGenres.map( genres => {
            return <multipleselectorModel>{key: genres.id, value: genres.name}
        });
        
        this.nonSelectedGenres = putGetDTO.nonSelectedGenres.map(movieTheaters => {
          return <multipleselectorModel>{key: movieTheaters.id, value: movieTheaters.name}
        });

        this.nonSelectedMovieTheaters = putGetDTO.nonSelectedMovieTheaters.map( genres => {
          return <multipleselectorModel>{key: genres.id, value: genres.name}
        });
      
        this.selectedMovieTheaters = putGetDTO.selectedMovieTheaters.map(movieTheaters => {
          return <multipleselectorModel>{key: movieTheaters.id, value: movieTheaters.name}
        });

        this.selectedActors = putGetDTO.actors;

      });
    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO){
    this.movieService.edit(this.model.id, movieCreationDTO).subscribe(()=>{
      this.router.navigate(['/movie/'+this.model.id]);
    });
  }

}
