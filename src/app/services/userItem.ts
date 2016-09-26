import { Injectable } from '@angular/core';

@Injectable()
export class UserItem {
  constructor(
    public pwd:string,
    public name:string,
    public icon?:string
  ) {}
}
