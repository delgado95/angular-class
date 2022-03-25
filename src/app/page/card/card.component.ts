import { Component, Input, OnInit, Output } from '@angular/core';
import { cardListService } from 'src/app/core/api/card.service';
import { ICardList } from 'src/app/core/data/card.data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [cardListService],
})
export class CardComponent implements OnInit {
  cardList: ICardList[] = [];

  constructor(
    private cardService: cardListService,
  ) { }

  ngOnInit(): void {
    this.cardList = this.cardService.getCardList;
  }

}
