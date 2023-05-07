import { Injectable } from '@angular/core';
import { genreCreationDTO, genreDTO } from './genres.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL+'/genres';

  getAll(): Observable<genreDTO[]>{
    return this.http.get<genreDTO[]>(this.apiURL);
  }

  create(genre: genreCreationDTO){
    return this.http.post(this.apiURL,genre);
  }
}
