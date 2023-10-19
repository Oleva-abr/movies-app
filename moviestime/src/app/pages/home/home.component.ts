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
  actionMovieData: any = []
  adventureMovieData: any = []
  animationMovieData: any = []
  comedyMovieData: any = []
  documentaryMovieData: any = []
  fictionMovieData: any = []
  thrillerMovieData: any = []

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
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

  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieData = result.results;
    });
  }




  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieData = result.results;
    });
  }



  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieData = result.results;
    });
  }



  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieData = result.results;
    });
  }


  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieData = result.results;
    });
  }



  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.fictionMovieData = result.results;
    });
  }


  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieData = result.results;
    });
  }


}
