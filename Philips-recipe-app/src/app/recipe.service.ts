import { Injectable, APP_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  API_KEY = '55ee45cc9403e2b119bc696b0f29b7fb';
  APP_ID = 'df53a280';

  constructor(private http: HttpClient) { }

  getRecipes(searchString: string): Observable<Object> {
    return this.http.get(`https://api.edamam.com/search?app_id=${this.APP_ID}&app_key=${this.API_KEY}&q=${searchString}`)
  }
}
