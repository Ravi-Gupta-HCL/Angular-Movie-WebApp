import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersDTO } from 'src/app/movie-theaters/movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute){
  }
  
  model: movieTheatersDTO={name:'Agora',latitude: 22.985198527325206, longitude:-282.74414062500006};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{

    });    
  }
  saveChanges(moviTheater: movieTheatersDTO){

  }
}