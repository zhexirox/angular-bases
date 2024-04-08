import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public OnDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Freezer',
    power: 4500
  }]

  //OnDelete = Index value: number

  onDeleteCharacter(id?: string):void {

    if(!id) return;
    this.OnDelete.emit(id);

  }
}
