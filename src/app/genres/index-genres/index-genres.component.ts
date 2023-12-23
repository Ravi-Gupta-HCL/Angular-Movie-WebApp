import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';
import { genreDTO } from '../genres.model';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})
export class IndexGenresComponent implements OnInit {
  
  genres: genreDTO[] = [];
  columnsToDisplay = ['name','actions'];

  constructor(private genreService: GenresService){}

  ngOnInit(): void {
    this.loadGenres()  
  }

  loadGenres()
  {
    this.genreService.getAll().subscribe(genres => {
      this.genres = genres;
    });
  }

  delete(id: number){
  this.genreService.delete(id)  .subscribe(() =>{this.loadGenres(); });
  }
  
}
