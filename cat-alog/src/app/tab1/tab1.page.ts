import {Component, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, IonGrid, IonRow, IonCol, IonInfiniteScroll, IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import {CatApiService} from "../cat-api-service/cat-api.service";
import {CatListItemComponent} from "../shared-components/cat-list-item/cat-list-item.component";
import {CatBreed} from "../interfaces/catBreed";
import {InfiniteScrollCustomEvent} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CatListItemComponent, IonGrid, IonRow, IonCol, IonInfiniteScroll, IonInfiniteScrollContent],
})
export class Tab1Page implements OnInit {

  cats: CatBreed[] = []
  displayedCats: CatBreed[] = []

  constructor(
    private catsApiService: CatApiService
  ) {}

  ngOnInit() {
    this.loadCats();
  }

  private loadCats() {
    this.catsApiService.getCatsPreview(30).subscribe(res => {
      this.cats = res;
      this.displayedCats = res.slice(0, 6);
    })
  }

  /**
   * Appends the next chunk of cats to the displayed list.
   * Uses the current displayed length to determine
   * the next slice of the full cat array.
   *
   * @returns {void}
   */
  private loadMoreCats() {
    const displayedLength = this.displayedCats.length;
    const chunk = this.cats.slice(displayedLength, displayedLength + 6);
    this.displayedCats.push(...chunk);
  }

  /**
   * Triggered by the Ionic Infinite Scroll component.
   * Loads additional items and completes the scroll event
   * after a short delay to show the loading spinner.
   *
   * @param {InfiniteScrollCustomEvent} event The scroll event emitted by Ionic.
   * @returns {void}
   */
  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.loadMoreCats();

    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
