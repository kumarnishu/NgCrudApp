import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post'

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURl = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  }
  constructor(private httpclient: HttpClient) { }
  getPosts(): Observable<Post[]> {
    return this.httpclient.get<Post[]>(this.apiURl + "/posts")
  }

  createPost(post: Post): Observable<Post> {
    return this.httpclient.post<Post>(this.apiURl + "/posts", JSON.stringify(post), this.httpOptions)
  }
  findPost(id: number): Observable<Post> {
    return this.httpclient.get<Post>(this.apiURl + "/posts" + id)
  }
  updatePost(id: number, post: Post): Observable<Post> {
    return this.httpclient.put<Post>(this.apiURl + "/posts" + id, JSON.stringify(post), this.httpOptions)
  }
  deletePost(id: number): Observable<Post> {
    return this.httpclient.delete<Post>(this.apiURl + "/posts" + id)
  }
}
