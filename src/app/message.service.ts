import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _httpClient: HttpClient) { }


  getMessage():Observable<any>{
    return this._httpClient.get("https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in");
  }

  // getMessageFilter(term:any):Observable<any>{
  //   return this._httpClient.get("https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in?filter="+term);
  // }
}
