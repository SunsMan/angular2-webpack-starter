import { Injectable } from '@angular/core';

@Injectable()
export class CourseItem {
  constructor(
    public id:number,
    public name:string,
    public description:string,
    public duration:number,
    public complexity:number
  ) {}
}
