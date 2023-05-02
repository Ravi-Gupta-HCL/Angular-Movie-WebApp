import { ContentObserver } from '@angular/cdk/observers';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { multipleselectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';

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

  nonSelectedGenres: multipleselectorModel[] = [
    {key: 1,value: 'Drama'},
    {key: 2,value: 'Action'},
    {key: 3,value: 'Comedy'},
  ];

  selectedGenres: multipleselectorModel[] = [];

  nonSelectedMovieTheaters: multipleselectorModel[]=[
    {key: 1,value: 'PVR Noida'},
    {key: 2,value: 'Janak'},
    {key: 3,value: 'Max HD'},
  ];

  selectedMovieTheaters: multipleselectorModel[] = [];

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
      movieTheatersIds:''
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


    this.onSaveChanges.emit(this.form.value);
  }

}
