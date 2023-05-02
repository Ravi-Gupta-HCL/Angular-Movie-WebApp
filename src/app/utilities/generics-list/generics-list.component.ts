import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generics-list',
  templateUrl: './generics-list.component.html',
  styleUrls: ['./generics-list.component.css']
})
export class GenericsListComponent implements OnInit {

@Input()
list:any;

  constructor(){}
ngOnInit(): void {

}

}
