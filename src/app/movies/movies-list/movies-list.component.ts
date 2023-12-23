import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit 
{
      constructor(private movieService: MoviesService ){}
      ngOnInit():void{}
      @Input()
      movies: any;

      @Output()
      onDelete = new EventEmitter<void>();

      remove(id:number){
        this.movieService.delete(id).subscribe(()=> {
          this.onDelete.emit();
        });
      }
      
}