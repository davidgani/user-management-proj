import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() Project: Project = {
    subject: '',
    userId: 0,
    userName: '',
    targetDate: new Date(),
    isCompleted: false
  };

  constructor() { }
}

export interface Project {
  subject: string;
  userId: number;
  userName: string;
  targetDate: Date;
  isCompleted: boolean;
}
