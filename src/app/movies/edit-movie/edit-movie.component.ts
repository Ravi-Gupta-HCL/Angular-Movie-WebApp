import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute){  }

  model: movieDTO = {title: 'Spider-Man', inTheaters: true, summary: 'Greate Movie of spider man', 
                    releaseDate: new Date(),trailer: 'https://www.youtube.com/watch?v=JfVOs4VSpmA', 
                    poster: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtU4DiRFRr0155DjcHlSsgJy9opzt_MPMJmHfG4MEa31-A82Xb'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
  });
  }

  saveChanges(movieCreationDTO: movieCreationDTO){

  }

}
