import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import getRandomIntInclusive from 'src/assets/helpers/randomNum';
import { Character } from 'src/assets/types/Character';
import { Episode } from 'src/assets/types/Episode';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(private _http: HttpClient) {}

  getRandomCharacter() {
    const id = getRandomIntInclusive(1, 826);
    console.log(id);
    return this._http.get<Character>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
  }

  getEpisode(url: string) {
    return this._http.get<Episode>(url);
  }
}
