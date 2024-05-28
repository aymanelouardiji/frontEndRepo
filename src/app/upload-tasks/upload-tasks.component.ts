import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-tasks',
  templateUrl: './upload-tasks.component.html',
  styleUrls: ['./upload-tasks.component.css']
})
export class UploadTasksComponent {
  selectedFile: File | null = null; 

  constructor(private http: HttpClient) { }

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0] || null; 
  }

  onUpload(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsText(this.selectedFile);
      reader.onload = () => {
        const json = JSON.parse(reader.result as string);
        this.http.post('http://localhost:8080/api/task/file', json)
          .subscribe(
            response => console.log('Upload successful', response),
            error => console.error('Upload failed', error)
          );
      };
      reader.onerror = (error) => {
        console.error('File reading error', error);
      };
    } else {
      console.error('No file selected');
    }
  }
}
