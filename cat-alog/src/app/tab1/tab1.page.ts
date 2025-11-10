import {Component, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, IonGrid, IonRow, IonCol,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {CatApiService} from "../cat-api-service/cat-api.service";
import {CatListItemComponent} from "../shared-components/cat-list-item/cat-list-item.component";
import {CatBreed} from "../interfaces/catBreed";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CatListItemComponent, IonGrid, IonRow, IonCol],
})
export class Tab1Page implements OnInit {

  cats: CatBreed[] = []

  constructor(
    private catsApiService: CatApiService
  ) {}

  ngOnInit() {
    this.catsApiService.getCatDetail('beng').subscribe(res => {

    })
    this.catsApiService.getCatsPreview(30).subscribe(res => {
      this.cats = res;
    })
  }
}
