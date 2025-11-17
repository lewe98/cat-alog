import {Component, Input} from '@angular/core';
import {IonIcon} from "@ionic/angular/standalone";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  imports: [
    IonIcon
  ]
})
export class RankingComponent {
  @Input() description?: string
  @Input() ranking?: number
  @Input() icon? = 'star'
  constructor() { }

  protected readonly Array = Array
}
