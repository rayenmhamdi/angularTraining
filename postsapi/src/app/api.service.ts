import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private base_url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }
  getposts(){
    return this.http.get<[]>(this.base_url+'posts')
  }

  addPost(postobj){
    return this.http.post(this.base_url+'posts', postobj)
  }

  getComments(){
    return this.http.get<[]>(this.base_url+'comments')
  }



}
