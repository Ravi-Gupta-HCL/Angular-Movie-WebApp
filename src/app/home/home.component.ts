import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheater = 
    [{
      title:  'Spiter Man',
      releaseDate: new Date(),
      price:1400.99,
      Poster: 'https://cdn.pixabay.com/photo/2020/09/11/00/06/spiderman-5561671__340.jpg'
    },
    {
      title:  'Padman',
      releaseDate: new Date('2023-04-30'),
      price:1300.99,
      Poster: 'https://www.filmibeat.com/fanimg/movie/15626/padman-2018-photos-images-59163.jpg'
    }];
  this.moviesFutureReleases=[];
  }
   moviesInTheater: { title: string; releaseDate: Date; price: number; Poster:string;}[] | any;
   moviesFutureReleases: { title: string; releaseDate: Date; price: number; Poster: string;}[] | any;
}
