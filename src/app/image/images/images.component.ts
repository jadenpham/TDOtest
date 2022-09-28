import { Component, OnInit } from '@angular/core';
import { ImageSerivceService } from '../image-serivce.service';
import { Image } from 'src/app/models/image.model';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private imageService: ImageSerivceService) { }


  imageList: Image[] = [];
  //create list of image descriptions on left side
  //when user clicks image description - image load on right side of screen - view component?
  ngOnInit(): void {
    this.imageService.getImages().
    subscribe((successResponse)=>{
      console.log(successResponse);
      this.imageList = successResponse;
    })
  }
  //on click set a variable to take in the id and show the correlating image
  onClick($event:any){
    console.log($event)
  }

}
