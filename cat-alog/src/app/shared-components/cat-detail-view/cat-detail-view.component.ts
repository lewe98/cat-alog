import {Component, inject, Input} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard, IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonChip,
  IonCol,
  IonContent,
  IonGrid, IonHeader, IonIcon,
  IonRow, IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {CatBreed} from "../../interfaces/catBreed";
import {RankingComponent} from "../ranking/ranking.component";

@Component({
  selector: 'app-cat-detail-view',
  templateUrl: './cat-detail-view.component.html',
  styleUrls: ['./cat-detail-view.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonChip,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonCardContent,
    RankingComponent,
    IonIcon
  ]
})
export class CatDetailViewComponent {

  protected modalCtrl = inject(ModalController)

  @Input() cat?: CatBreed | null;
  @Input() imageUrl?: string;
  fallbackImage = "https://ionicframework.com/docs/img/demos/card-media.png"

  constructor(
  ) { }

}

