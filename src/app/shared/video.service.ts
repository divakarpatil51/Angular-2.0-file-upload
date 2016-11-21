import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VideoService {

    constructor(private http: Http) { };

    getTitle(): Promise<any> {
        return this.http.get('/api/simple/simple')
            .toPromise()
            .then(response => response.json())
            .catch(error => {return Promise.reject(error); });
    }

    uploadPhoto(fileName: string): Promise<any> {
        return this.http.post('/api/uploadPhoto/uploadVideo', fileName)
        .toPromise()
        .then(response => response.json())
        .catch(error => {return Promise.reject(error);});
    }
}
