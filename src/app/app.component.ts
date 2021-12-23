import { Component } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from './contentful.service';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'y42-contentful-articles-angular';
  blogPosts: any[] = [];
  noOfRecords = 3;
  loading$ = this.loader.loading$;

  constructor(private contentfulService: ContentfulService, private loader: LoadingService) { }

  async ngOnInit() {
    this.loadMore();
  }

  async loadMore() {
    this.loader.show()
    const moreBlogs = await this.contentfulService.getProducts(this.noOfRecords, this.blogPosts.length);
    this.blogPosts = [...this.blogPosts, ...moreBlogs];
    this.loader.hide()
  }

  trackByNo(index: number): number {
    return index;
  }
}
