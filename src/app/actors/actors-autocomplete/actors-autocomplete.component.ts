import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteActivatedEvent, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {
  constructor(){}

  control: FormControl = new FormControl();

  actors =[
    {name: 'Tom Holland', picture: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/62CB/production/_126319252_gettyimages-1361454688.jpg'},
    {name: 'Tom Hanks', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RMvrYhAkEIWyWIJCksF1SpQBrpaX4zfnWw&usqp=CAU'},
    {name: 'Samual L. Jaction', picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwh7zfR28qgYgNyGBiG8kFdQEjzav0ZXUKOnRjA928qvVmisjaNAbL5JOrfIajQI51kcM&usqp=CAU'}
  ]

  selectedActors: any[] = [];
  originalActors = this.actors;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1)

    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('')
   }

}
