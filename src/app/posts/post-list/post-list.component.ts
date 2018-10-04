import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post content'},
  //   {title: 'Second Post', content: 'This is the second post content'},
  //   {title: 'Third Post', content: 'This is the third post content'},
  //   {title: 'Fourth Post', content: 'This is the fourth post content'}
  // ];

  posts: Post[] = [];
  isLoading = false;
  private postsSub: Subscription;

 constructor(public postsService: PostsService) {

 }

 ngOnInit() {
   this.isLoading = true;
   this.postsService.getPosts();
   this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.isLoading = false;
      this.posts = posts;
    });
 }

  onDelete(postId: string) {
    this.postsService.deletePost(postId);
  }

 ngOnDestroy() {
   // prevent memory leaks
   this.postsSub.unsubscribe();
 }
}
