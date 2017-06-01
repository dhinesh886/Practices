import { Component, OnInit } from '@angular/core';
import { PostService } from '../Service/post.service';
@Component({
    selector: 'http-service',
    templateUrl: '../../Templates/httpservice.template.html',
    providers: [PostService]
})

export class HttpServiceComponent implements OnInit {
    post: any;
    posts: any;
    isLoading: boolean = true;
    constructor(private _service: PostService) {

    }
    ngOnInit() {
        this._service.getPosts()
            .subscribe(res => this.getPostsCallback(res));
    }
    getPostsCallback(res: any) {
        this.posts = res;
        this.isLoading = false;
    }
    OnClick(postid: Number) {
        console.log("1");
        this.isLoading = true;
        this.post = null;
        this._service.getPost(postid)
            .subscribe(res => {
                console.log("2");
                this.post = res;
                this.isLoading = false;
            });
        console.log("3");
    }
}

