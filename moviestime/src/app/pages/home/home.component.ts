import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: MovieApiServiceService) { }

  bannerApiData: any = []
  trendingMovieData: any = []

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((data) => {
      this.bannerApiData = data.results;

    })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((trendings) => {

      this.trendingMovieData = trendings.results;

    })
  }

}
