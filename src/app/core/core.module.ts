import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './services/post.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    PostService
  ]
})
export class CoreModule { }
