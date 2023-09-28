import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'message'
})
export class MessagePipe implements PipeTransform {

  transform(user: any[], search: string): any[] {
    if (!user || !search) {
      return user;
    }

    search = search.toLowerCase();

    return user.filter((user) => 
      user.name.first.toLowerCase().includes(search) ||
      user.name.last.toLowerCase().includes(search)
    );
  }
}

