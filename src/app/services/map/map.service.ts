import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  apiUrl: string = "https://api.mapbox.com";

  constructor(
    private http: HttpClient
  ) { }

  getSearchboxResults(q: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/searchbox/v1/suggest?q=${q}&language=en&limit=5&session_token=1234567890&access_token=${environment.mapbox.accessToken}`);
  }
}
