import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
const CONFIG = {
  space: 'tlqfiok8qhck',
  accessToken:
    'KQ17Gazu9xSq2yNvwDDOASVkxTvF55SOAkE0_6BRzmY',
  host: 'cdn.contentful.com',
  environment: 'test',
};

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient(CONFIG);

  constructor() { }

  getProducts(noOfRecords: number, skip: number): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'blogPost',
      limit: noOfRecords,
      skip
    }))
      .then(res => res.items);

  }
}
