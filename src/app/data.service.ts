import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>(['The first goal', 'The second goal', 'The third goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal)
  {
    this.goals.next(goal);
  }

}
