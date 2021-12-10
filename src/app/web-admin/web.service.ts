import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class WebService {
  constructor(private http: HttpClient) { }

  private get(url: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(url, { observe: 'response' });
  }

  private post(url : string, body : any) : Observable<HttpResponse<any>> {
    return this.http.post<any>(url, body, { observe: 'response' });
  }

  private put(url : string, body : any) : Observable<HttpResponse<any>> {
    return this.http.put<any>(url, body, { observe: 'response' });
  }

  private delete(url : string) : Observable<HttpResponse<any>> {
    return this.http.delete<any>(url, { observe: 'response' });
  }

  packageList () : Observable<HttpResponse<any>> {
    return this.get(environment.apiUrl + "/package");
  }

  packageShow (package_id : string) : Observable<HttpResponse<any>> {
    return this.get(`${environment.apiUrl}/package/${package_id}`);
  }

  packageCreate (body : any) : Observable<HttpResponse<any>> {
    return this.post(environment.apiUrl + "/package/create", body);
  }

  packageUpdate (package_id : string, body : any) : Observable<HttpResponse<any>> {
    return this.put(`${environment.apiUrl}/package/update/${package_id}`, body);
  }

  packageDelete (package_id : string) : Observable<HttpResponse<any>> {
    return this.delete(`${environment.apiUrl}/package/delete/${package_id}`);
  }

  deliveryList () : Observable<HttpResponse<any>> {
    return this.get(environment.apiUrl + "/delivery");
  }

  deliveryShow (delivery_id : string) : Observable<HttpResponse<any>> {
    return this.get(`${environment.apiUrl}/delivery/${delivery_id}`);
  }

  deliveryCreate (body : any) : Observable<HttpResponse<any>> {
    return this.post(environment.apiUrl + "/delivery/create", body);
  }

  deliveryUpdate (delivery_id : string, body : any) : Observable<HttpResponse<any>> {
    return this.put(`${environment.apiUrl}/delivery/update/${delivery_id}`, body);
  }

  deliveryDelete (delivery_id : string) : Observable<HttpResponse<any>> {
    return this.delete(`${environment.apiUrl}/delivery/delete/${delivery_id}`);
  }
}
