import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[];
  constructor(private postServices: PostService) { }

  ngOnInit() {
    this.posts = this.postServices.getPosts();
    console.log(this.posts);
    

  }

}
