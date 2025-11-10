import {Component, Input, OnInit} from '@angular/core';
import {IonIcon} from "@ionic/angular/standalone";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  imports: [
    IonIcon
  ]
})
export class RankingComponent  implements OnInit {
  @Input() description?: string
  @Input() ranking?: number
  @Input() icon? = 'star'
  constructor() { }

  ngOnInit() {}

  protected readonly Array = Array
}
