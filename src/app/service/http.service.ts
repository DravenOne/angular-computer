import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class httpService{
    configUrl= 'assets/config.json';
    constructor(private http:HttpClient){}
    
   /**
   * 根据模板id获取事件列表
   * @param {string} id
   * @returns {Observable<string[]>}
   */
    getTemplateEvents(id: string): Observable<string[]> {
        return this.http.get<string[]>(this.configUrl)
          .pipe(
            // tap(res => this.log(`fetched templateEvents`)),
            catchError(this.handleError('getTemplateEvents', []))
          );
      }
      getConfig() {
        return this.http.get(this.configUrl);
      }
        /**
   * 错误处理
   * @param {string} operation
   * @param {T} result
   * @returns {(error: any) => Observable<T>}
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}