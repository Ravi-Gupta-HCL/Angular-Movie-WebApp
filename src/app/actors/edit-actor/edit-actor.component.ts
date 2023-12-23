import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';
import { formatDateFormData } from 'src/app/utilities/utils';


@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {
  
  constructor(private ActivatedRoute: ActivatedRoute, private actorService: ActorsService
    ,private router: Router) {
    }
    
  model!: actorDTO;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params =>{
    this.actorService.getById(params['id']).subscribe(actor => this.model= actor)
    });    
  }

  saveChanges(actor: actorCreationDTO){
     this.actorService.edit(this.model.id, actor).subscribe(() => {
      this.router.navigate(['/actors']);
     });
  }
}
