import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class FriendsService {

  constructor(private _http: Http) { }

  getFriends(){
  	return this._http.get('/api/friends').map( (friends: Response) => friends.json() ).toPromise();
  }

}
