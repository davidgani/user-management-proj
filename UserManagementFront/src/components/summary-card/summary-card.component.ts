import { Component, Input } from '@angular/core';
import {  Project } from '../card/card.component';
import { User } from 'src/app/pages/user-management-page/user-management-page.component';

@Component({
  selector: 'summary-card',
  templateUrl: './summary-card.component.html',
})
export class SummaryCardComponent {
  @Input() projects!: Project[];
  @Input() users!: User[];


  getOpenProjectsByUser(user: User) {
    let totalOpenProjects = 0;
    this.projects.forEach(p => {
      if(p.userId == user.id && !p.isCompleted){
        totalOpenProjects ++;
      }
    })

    return `${user.name} : ${totalOpenProjects}`
  }
}