import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from './home.type';
import { AppEnvValues } from '../../../../../env/app.env';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getUserFromServer() {
    return new Promise<UserType[]>((res, rej) => {
      this.http
        .get<UserType[]>(`${AppEnvValues.Server_Url}/pse-team/users`)
        .subscribe({
          next: (users) => {
            console.log(users);
            res(users);
          },
          error: (error: any) => {
            console.log(error);
            rej(error);
          },
        });
    });
  }
}
