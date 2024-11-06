import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-video-analysis',
  templateUrl: './video-analysis.component.html',
  styleUrls: ['./video-analysis.component.css']
})

/*

team1_average_distance
: 
30.239632106931694
team1_average_speed
: 
6.04591150534701
team1_possession
: 
54.93333333333334
team2_average_distance
: 
20.258942306199497
team2_average_speed
: 
3.81418220898178
team2_possession
: 
45.06666666666666
*/

/*
import React, { useRef } from 'react';
import axios from 'axios';

function VideoUpload() {
    const fileInput = useRef();

    const uploadVideo = async () => {
        const file = fileInput.current.files[0];
        const formData = new FormData();
        formData.append('video', file);


        try {
            const response = await axios.post('http://localhost:8000/api/analyse-video/', formData);
            console.log("response ", response.data);
        } catch (err) {
            console.log("error ", err);
        }

    }

    return (
        <div className="latest-news">

            <div>
                <input type="file" ref={fileInput} />
                <button onClick={uploadVideo}>Upload</button>
            </div>
            <video src="http://localhost:8000/media/08fd33_4.mp4"></video>
        </div>
    );
}

export default VideoUpload;
*/



export class VideoAnalysisComponent {
  @ViewChild('fileInput') fileInput: ElementRef;

  json_returned = {
    team1_average_distance : 'waiting for data ...',
    team1_average_speed : 'waiting for data ...',
    team1_possession : 'waiting for data ...',
    team2_average_distance : 'waiting for data ...', 
    team2_average_speed : 'waiting for data ...',
    team2_possession : 'waiting for data ...'
  }
  waiting_message: string = '';

  constructor(private httpClient: HttpClient) { }

  uploadVideo() {
    this.waiting_message = 'Please wait while proccessing the video ...';
    const file = this.fileInput.nativeElement.files[0];
    const formData: FormData = new FormData();
    formData.append('video', file);

    this.httpClient.post('http://localhost:8000/api/analyse-video/', formData)
      .subscribe(
        (response : any) => {
          console.log('response ', response);
          this.json_returned = response;
        },
        (error) => {
          console.log('error ', error);
        }
      );
  }
}