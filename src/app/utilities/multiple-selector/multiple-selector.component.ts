import { Component, Input, OnInit } from '@angular/core';
import { multipleselectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.css']
})
export class MultipleSelectorComponent implements OnInit {
  constructor(){}

  @Input()
  SelectedItems: multipleselectorModel[] = [];

  @Input()
  NonSelectedItems: multipleselectorModel[] = [];

  ngOnInit(): void {
    
  }

  select(item: multipleselectorModel, index: number){
    this.SelectedItems.push(item);
    this.NonSelectedItems.splice(index,1);
  }

  deselect(item: multipleselectorModel, index: number){
    this.NonSelectedItems.push(item);
    this.SelectedItems.splice(index,1);
  }

  SelectAll(){
    this.SelectedItems.push(...this.NonSelectedItems);
    this.NonSelectedItems = [];
  }

  deSelectAll(){
    this.NonSelectedItems.push(...this.SelectedItems);
    this.SelectedItems = [];
  }

}
