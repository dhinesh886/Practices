import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Post } from '../Models/Post.model';

@Injectable()
export class PostService {

constructor (private _http: Http)
{

}
 getPosts() 
 {
     return this._http.get("https://jsonplaceholder.typicode.com/posts")
     .map(response => response.json());
 }
    getPost(id:Number)
 {
     return this._http.get("https://jsonplaceholder.typicode.com/posts/"+id.toString())
     .map(response => response.json());
 }
 createPost(post : Post)
 {
     return this._http.get("https://jsonplaceholder.typicode.com/posts", JSON.stringify(post))
     .map(response => response.json());
 }
}