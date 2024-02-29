import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})

export class IndexComponent {
  posts: Post[] = []
  constructor(public postService: PostService) { }
  ngOnInit(): void {
    this.postService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts)
    })
  }
}
