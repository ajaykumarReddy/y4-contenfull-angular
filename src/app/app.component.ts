import { Component } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from './contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'y42-contentful-articles-angular';
  blogPosts: any[] = [];
  noOfRecords = 3;

  constructor(private contentfulService: ContentfulService) { }

  async ngOnInit() {
    this.loadMore();
  }

  async loadMore() {
    const moreBlogs = await this.contentfulService.getProducts(this.noOfRecords, this.blogPosts.length);
    this.blogPosts = [...this.blogPosts, ...moreBlogs];
  }
}
