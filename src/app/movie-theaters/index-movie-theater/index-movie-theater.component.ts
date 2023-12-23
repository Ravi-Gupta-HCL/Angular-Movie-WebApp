import { Component, OnInit } from '@angular/core';
import { MovieTheatersService } from '../movie-theaters.service';
import { movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-index-movie-theater',
  templateUrl: './index-movie-theater.component.html',
  styleUrls: ['./index-movie-theater.component.css']
})
export class IndexMovieTheaterComponent implements OnInit {

  constructor(private movieTheatersService: MovieTheatersService){}

  movieTheaters: movieTheatersDTO[] = [];
  displayColumns = ['name','actions'];

  loadData(){
    this.movieTheatersService.get().subscribe( movieTheaters => this.movieTheaters = movieTheaters )
  }

  ngOnInit(): void{
  this.loadData();
  }
  
  delete(id: number){
    this.movieTheatersService.delete(id).subscribe(()=> this.loadData());
  }

}
