import { Component, Input } from '@angular/core';
import { Project } from '../card/card.component';
import { User } from 'src/app/pages/user-management-page/user-management-page.component';

@Component({
  selector: 'user-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() cardDataList!: Project[];
  @Input() users!: User[];

  listHeight: number = 500; 
  constructor() {}
}