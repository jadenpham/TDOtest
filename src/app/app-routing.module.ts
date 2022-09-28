import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './image/images/images.component';
import { ImageViewComponent } from './image/image-view/image-view.component';

const routes: Routes =[
  {
    path: '',
    component: ImagesComponent
  },
  {
    path: ':id',
    component: ImageViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule,
     RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
