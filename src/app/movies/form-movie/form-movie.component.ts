import { ContentObserver } from '@angular/cdk/observers';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { multipleselectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { actorsMovieDTO } from 'src/app/actors/actors.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder){}

  form!: FormGroup

  @Input()
  model!: movieDTO | any;

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>()

  @Input()
  nonSelectedGenres: multipleselectorModel[] = [];

  @Input()
  selectedGenres: multipleselectorModel[] = [];

  @Input()
  nonSelectedMovieTheaters: multipleselectorModel[]=[];

  @Input()
  selectedMovieTheaters: multipleselectorModel[] = [];

  @Input()
  selectedActors: actorsMovieDTO[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['',{
        validator: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds:'',
      movieTheatersIds:'',
      actors:''
    })

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    } 


  }

  onImageSelected(file: any){
    this.form.get('poster')?.setValue(file);
  }

  changeMarkdown(content: any){
    this.form.get('summary')?.setValue(content);
  }

  saveChanges(){
    const genresIds = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds')?.setValue(genresIds);

    const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    this.form.get('movieTheatersIds')?.setValue(movieTheatersIds);

    const actors = this.selectedActors.map(val=> {
        return {id: val.id, character: val.character}
    });
    this.form.get('actors')?.setValue(actors)

    this.onSaveChanges.emit(this.form.value);
  }

}
