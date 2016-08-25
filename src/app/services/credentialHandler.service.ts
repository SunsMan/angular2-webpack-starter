import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class CredentialHandler {
  apiUrl:string = 'someUrl';

  constructor(private http:Http) { }

  checkCredentials(login:string, pwd:string) {
    return true;  // TODO
  }

}

