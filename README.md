Error: src/app/main/services/HTTPService.ts:17:18 - error TS7006: Parameter 'url' implicitly has an 'any' type.   

17     async update(url,data) {
                    ~~~


Error: src/app/main/services/HTTPService.ts:17:22 - error TS7006: Parameter 'data' implicitly has an 'any' type.  

17     async update(url,data) {
                        ~~~~


Error: src/app/main/services/HTTPService.ts:27:18 - error TS7006: Parameter 'url' implicitly has an 'any' type.   

27     async create(url,data) {
                    ~~~


Error: src/app/main/services/HTTPService.ts:27:22 - error TS7006: Parameter 'data' implicitly has an 'any' type.  

27     async create(url,data) {
                        ~~~~


Error: src/app/main/services/HTTPService.ts:34:18 - error TS7006: Parameter 'url' implicitly has an 'any' type.   

34     async remove(url) {
                    ~~~




** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ** 


× Failed to compile.



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class HTTPService  {

    

    headers = { 'content-type': 'application/json' }
    model = ''
    constructor(private http: HttpClient) {
    }
    async update(url,data) {
        await this.http.put(url,data)
    }
    getAll(url:string) {
        const header=new HttpHeaders({ Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) });
        return this.http.get(url,{headers:header});
    }
    get(id: string) {
        return this.http.get(id);
    }
    async create(url,data) {

        const body = JSON.stringify(data);
        const headers = new HttpHeaders({ 'content-type': 'application/json',Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) } )
        await this.http.post(url, body,
            { 'headers': headers }).toPromise();
    }
    async remove(url) {
         const headers = new HttpHeaders({ 'content-type': 'application/json',Authorization: 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')) } )
        await this.http.delete(url, {
            headers: headers
        }).toPromise();
    }


}
