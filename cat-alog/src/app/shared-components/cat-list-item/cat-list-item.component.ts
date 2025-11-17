import {Component, Input, OnInit} from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonChip,
  ModalController
} from "@ionic/angular/standalone";
import {CatBreed} from "../../interfaces/catBreed";
import {CatApiService} from "../../cat-api-service/cat-api.service";
import {CatDetailViewComponent} from "../cat-detail-view/cat-detail-view.component";
import {RankingComponent} from "../ranking/ranking.component";

@Component({
    selector: 'app-cat-list-item',
    templateUrl: './cat-list-item.component.html',
    styleUrls: ['./cat-list-item.component.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    RankingComponent,
    IonChip
  ]
})
export class CatListItemComponent  implements OnInit {
  @Input() cat?: CatBreed;
  imgUrl = "https://ionicframework.com/docs/img/demos/card-media.png"

  constructor(
    private catApiService: CatApiService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    if (this.cat?.name) {
      console.log(this.cat.name);
      console.log(this.cat.id);
      this.catApiService.getCatImagesById(this.cat?.id).subscribe(res=> {
        console.log(res);
        console.log(res[0].url);
        this.imgUrl = res[0].url;
      })
    }
  }

  /**
   * Opens the detailed modal view for the selected cat.
   * Uses Ionic's ModalController and passes the cat
   * and its preview image to the modal component.
   */
  async openDetailView() {
    if (!this.cat) return;
    const modal = await this.modalCtrl.create({
      component: CatDetailViewComponent,
      componentProps: {
        cat: this.cat,
        imageUrl: this.imgUrl
      },
      showBackdrop: true
    });
    await modal.present();
  }

}
