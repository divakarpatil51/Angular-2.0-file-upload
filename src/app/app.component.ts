import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoService } from './shared/video.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [VideoService]
})
export class AppComponent {
    public title = 'app works!';
    public photos_file_src: string;
    public videos_file_src: string;

    constructor(private sanitizer: DomSanitizer,
        private videoService: VideoService) { }

    uploadPhotos(input) {
        // this.videoService.getTitle()
        //     .then(data => {
        //         console.log(data);
        //         this.photos_file_src = window.URL.createObjectURL(input.files[0]);
        //     });
        let formData: any = new FormData();
        formData.append('uploads', input.files[0], input.files[0].name);
        this.videoService.uploadPhoto(formData)
            .then(response => {
                console.log('Photo response: ', response);
                this.photos_file_src = window.URL.createObjectURL(input.files[0]);
            });
    }

    uploadVideos(input) {
        let formData: any = new FormData();
        formData.append('uploads', input.files[0], input.files[0].name);
        this.videoService.uploadPhoto(formData)
            .then(response => {
                console.log(response.originalname);
                this.videos_file_src = response.path;
            });
        //  = window.URL.createObjectURL(input.files[0]);
    }

    sanitize(url: string) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
}
