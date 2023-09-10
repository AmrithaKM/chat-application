import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/enviornment';

@Injectable({
  providedIn: 'root'
})

export class OpenAiApiService {

//   private apiUrl = 'http://20.219.84.90:8000/api/query?q'; // Update with your Node.js server URL

  constructor(private http: HttpClient) { }

  public sendMessage(message: string) {
    let  apiUrl = `http://20.219.84.90:8000/api/query?q=${message}`;
    // return null;
        return this.http.get(apiUrl);
      
  }


}