import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { UserItem } from '../services';

@Injectable()
export class CredentialHandlerService {
  apiUrl:string = 'someUrl';
  user:UserItem;
  private _login:string = 'q';
  private _pwd:string = 'q';
  private http:Http;

  constructor() { }

  public checkCredentials(login:string, pwd:string):Observable<UserItem> {
    return Observable.create((observer) => {
      setTimeout(()=> {
      if (login==this._login && pwd==this._pwd) {
        this.user = new UserItem(pwd, login);
        observer.next(this.user);
      }
      else observer.error('error login or password');
      }, 300);
    });
  }

}

