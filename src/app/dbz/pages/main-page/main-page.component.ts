import { DbzService } from './../../services/dbz.service';
import { Component } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor ( private dbzService: DbzService ) {

  }

  get characters(): Character[]{
    //return this.dbzService.characters;
    return [...this.dbzService.characters];
  }
  onDeleteCharacter(id: string):void {
    return this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter( character: Character) {
    this.dbzService.addCharacter(character);
  }

}
