import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { myAlbum } from 'src/models/albums';
import { myPhotos } from 'src/models/photos';
import { AlbumsService } from '../albums/albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {

  album: myAlbum;
  photos: myPhotos[];

  constructor(private route: ActivatedRoute, private albumService: AlbumsService) {
    this.album = {} as myAlbum;
    this.photos = [{}] as myPhotos[];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        let _id = params.get('id');
        if (_id) {
          let id = +_id;
          this.albumService.getAlbum(id).subscribe(
            (response) => {
              this.album = response;
            },
            (error) => {
              console.log(error);
            }
          );
          this.albumService.getPhotos(id).subscribe(
            (response) => {
              this.photos = response.slice(0, 3);
            },
            (error) => {
              console.log(error);
            }
          );
        }
      }
    );
  }

  back() {
    window.location.href = `http://localhost:4200/albums/${this.album.id}`;
  }
}
