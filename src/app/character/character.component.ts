import { Component } from '@angular/core';
import { RickAndMortyService } from '../rick-and-morty.service';
import { Character } from 'src/assets/types/Character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  character: Character | undefined;
  constructor(private _apiservice: RickAndMortyService) {}

  getCharacter() {
    this._apiservice.getRandomCharacter().subscribe((res) => {
      const characterData = res;
      this._apiservice.getEpisode(res.episode[0]).subscribe((res) => {
        {
          this.character = { ...characterData, firstSeenIn: res.name };
        }
      });
    });
  }
}
