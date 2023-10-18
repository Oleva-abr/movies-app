import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) { }

  getMovieDetailData: any;
  getMovieVideoData: any;
  getMovieCastData: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id')

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }


  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((details) => {

      this.getMovieDetailData = details
    })
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((video) => {

      video.results.forEach((element: any) => {
        if (element.type === 'Trailer') {

          this.getMovieVideoData = element.key;
        }
      });
    })
  }

  getCast(id: any) {
    this.service.getMovieCast(id).subscribe((cast) => {

      this.getMovieCastData = cast.cast;
    })
  }

}
