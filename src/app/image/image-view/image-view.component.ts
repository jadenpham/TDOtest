import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/models/image.model';
import { ImageSerivceService } from '../image-serivce.service';
@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  image: Image = {
    imageId: '',
    imageDescription: '',
    imagePath: ''
  }
  imageId: string|null = '';
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) =>{
        this.imageId = params.get('id');
        console.log(this.imageId)
        switch(this.imageId){
          case 'bb1003de-4116-4ee6-819d-8d3b953ea3d2':{
            this.image.imagePath = '../assets/images/1.jpg'
            break;
          }
          case '15e3cd19-b24d-4206-9c05-95535e31c3fd':{
            this.image.imagePath = '../assets/images/4.jpg'
            break;

          }
          case '5df12b80-ea44-4282-932f-aa263bf6a0a4':{
            this.image.imagePath = '../assets/images/8.jpg'
            break;
          }
        }
      }
    )
  }

}
