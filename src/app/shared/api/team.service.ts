import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class TeamService {
  constructor(public api: ApiService) {}
  public getTeam(queryStr: string): Promise<any> {
    return this.api.run('get', `/teams`, queryStr, {})
  }
  public getTeamById(id: string): Promise<any> {
    return this.api.run('get', `/teams/${id}`, '', {})
  }
  public getTeams(idArr: string[]): Promise<any> {
    let promises: any = [];
    idArr.forEach(id => {
      promises.push(this.api.run('get', `/teams/${id}`, '', {}));
    });
    return Promise.all(promises);
  }
}