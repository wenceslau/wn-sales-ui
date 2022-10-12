import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  baseurl = 'http://localhost:8083';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  get(path: string): Promise<any> {
    return this._get(path);
  }

  post(path: string, data: any): Promise<any> {
    return this._post(path, data);
  }

  put(path: string, data: any): Promise<any> {
    return this._put(path, data);
  }

  delete(path: string): Promise<any> {
    return this._delete(path);
  }


  private _get(path: string): Promise<any> {
    const url = this.baseurl + path;
    return this.http
      .get(url, { headers: this.httpOptions.headers })
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  private _post(path: string, data: any): Promise<any> {
    const url = this.baseurl + path;
    return this.http
      .post(url, JSON.stringify(data), { headers: this.httpOptions.headers })
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  private _put(path: string, data: any): Promise<any> {
    const url = this.baseurl + path;
    return this.http
      .put(url, JSON.stringify(data), { headers: this.httpOptions.headers })
      .toPromise()
      .then((response) => {
        return response;
      });
  }

  private _delete(path: string): Promise<any> {
    const url = this.baseurl + path;
    return this.http
      .delete(url, { headers: this.httpOptions.headers })
      .toPromise()
      .then((response) => {
        return response;
      });
  }
}
