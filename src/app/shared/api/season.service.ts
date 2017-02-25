import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable()
export class SeasonService {
  constructor(public api: ApiService) {}
  public getSeasons(): Promise<any> {
    return this.api.run('get', `/seasons`, '', {})
  }
  public getSeasonById(id: string): Promise<any> {
    return this.api.run('get', `/seasons/${id}`, '&filter={"include": "games"}', {})
  }
}