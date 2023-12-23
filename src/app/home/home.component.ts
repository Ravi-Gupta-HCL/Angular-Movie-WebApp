import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { movieDTO } from '../movies/movies.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
constructor(private moviesService: MoviesService){}
  ngOnInit(): void {
    this.loadData();
  }
   moviesInTheater: movieDTO[] = [];
   moviesFutureReleases: movieDTO[] = [];

  loadData(){
    this.moviesService.getHomePageMovies().subscribe(homeDTO => {
      this.moviesInTheater= homeDTO.inTheaters;
      this.moviesFutureReleases=homeDTO.upcomingReleases
    })
  }

   onDelete(){
    this.loadData();
   }
}
