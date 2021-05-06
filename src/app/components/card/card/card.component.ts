import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() currentCard
  showCard: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  public toggleShowCard(): void {
    this.showCard = !this.showCard
  }
}
