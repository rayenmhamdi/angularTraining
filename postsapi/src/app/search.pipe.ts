import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(posts: any[], searchterm: string): any[] {

    if (!posts) return [];
    if (!searchterm) return  posts;
    return posts.filter(e => e.body.toLowerCase().indexOf(searchterm) > -1 );

  }

}
