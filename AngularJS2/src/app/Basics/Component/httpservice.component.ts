import {Component, OnInit} from '@angular/core';
import { PostService } from '../Service/post.service';
@Component({
    selector : 'http-service',
    templateUrl : '../../Templates/httpservice.template.html',
    providers : [PostService]
})

export class HttpServiceComponent implements OnInit {
    posts : any;
    constructor(private _service : PostService)
    {

    }
ngOnInit()
{
    this._service.getPosts()
    .subscribe(res => this.getPostsCallback(res));
}
getPostsCallback(res: any)
{
    this.posts = res;
}
}