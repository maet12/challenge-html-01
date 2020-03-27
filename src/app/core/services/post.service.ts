import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  description = 'There is a lot of exciting stuff going in the stars above us that make astronomy so much fun';

  private posts: Post[] = [
    {
      id: 1, title: 'Using banner stands to increase trade show traffic', tag: 'TECHNOLOGY',
      description: this.description, image: './src/assets/imgs/dose-media-344938.png'
    },
    {
      id: 2, title: 'Search engine optimization and advertising', tag: 'TECHNOLOGY',
      description: this.description, image: './src/assets/imgs/aidan-hancock-455440.png'
    },
    {
      id: 3, title: 'Writing a good headline for your advertisement', tag: 'FINANCE',
      description: this.description, image: './src/assets/imgs/crew-22235.png'
    },
    {
      id: 4, title: '6 powerful tips to creating testimonial that sell your products fast', tag: 'TECHNOLOGY',
      description: this.description, image: './src/assets/imgs/annie-spratt-213059.png'
    },
    {
      id: 5, title: '15 tips to increase your adwords profits', tag: 'ENTERTAINMENT',
      description: this.description, image: './src/assets/imgs/jeff-sheldon-264920.png'
    }
  ];

  getPosts() {
    return this.posts;
  }
}
