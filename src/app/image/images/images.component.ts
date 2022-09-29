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
  displayImagePath: string|null = '';

  //create list of image descriptions on left side
  //when user clicks image description - image load on right side of screen - view component?
  ngOnInit(): void {
    this.imageService.getImages().
    subscribe((successResponse)=>{
      this.imageList = successResponse;
    })
  }
  //on click set a variable to take in the id and show the correlating image
  onClick(imageId:string){
    switch(imageId){
      case 'bb1003de-4116-4ee6-819d-8d3b953ea3d2':{
        this.displayImagePath = '../assets/images/1.jpg'
        break;
      }
      case '15e3cd19-b24d-4206-9c05-95535e31c3fd':{
        this.displayImagePath = '../assets/images/4.jpg'
        break;

      }
      case '5df12b80-ea44-4282-932f-aa263bf6a0a4':{
        this.displayImagePath = '../assets/images/8.jpg'
        break;
      }
    }
  }

}
