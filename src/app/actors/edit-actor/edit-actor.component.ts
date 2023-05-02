import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {
  
  constructor(private ActivatedRoute: ActivatedRoute){
  }
  
  model: actorDTO = 
      {
        name: 'Ravi Kumar Gupta', 
        dateOfBirth: new Date(), 
        biography: 'Default biography',
        picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/330px-Tom_Holland_by_Gage_Skidmore.jpg'
      }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params =>{
    //alert(params['id']);
    });    
  }

  saveChanges(actorCreationDTO: actorCreationDTO){
     console.log(actorCreationDTO);
  }
}
