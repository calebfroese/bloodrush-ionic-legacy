import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class LeagueService {
  constructor(public api: ApiService) {}
  public getLeague(): Promise<any> {
    return this.api.run('get', `/leagues`, '&filter={"include": "seasons"}', {})
  }
}