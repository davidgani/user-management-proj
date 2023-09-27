import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/Api/http.service';
import { User } from 'src/app/pages/user-management-page/user-management-page.component';
import { Project } from '../card/card.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'add-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  @Input() users!: User[];
  @Input() projects! : Project[];
  @Output() newProjectEvent = new EventEmitter<Project>();


  formData: FormData = {
    subject: '',
    user: '',
    targetDate: null,
    isCompleted: false
  };

  constructor(private httpService: HttpService, private snackbar: MatSnackBar) {
    this.httpService = httpService;
    this.snackbar = snackbar;
  }

  

  openSnackBar(message: string) {
    this.snackbar.open(message, 'Ok', {
      duration: 3000
    });
}

  submitForm(form: NgForm): void {
    if (form.valid) {
      let project = form.form.value;
      
      let validationMessage = this.validateForm(project)

      if(validationMessage != null) {
        alert(validationMessage);
        return;
      }

      try {
        this.httpService.postData("UserManagement/AddProject", 
        {
         subject: project.subject,
         targetDate: project.targetDate,
         isCompleted: project.isCompleted,
         userId: project.user.id
       });
 
       this.newProjectEvent.emit(project);
       this.openSnackBar("פרויקט הוסף בהצלחה", )
        
      } catch (error) {
        this.openSnackBar("שגיאה בהוספת משתמש");
      }
    }
  }

  validateForm(project: any) {
    if(this.projects.filter(p => p.subject === project.subject && p.userName === project.user.name).length > 0)  {
      return "למתשמש כבר קיים נושא כזה";
    }

    if(this.projects.filter(p => p.userId === project.user.id).length >= 10) {
      return "לא ניתן לשים יותר מ10 משימות על משתמש";
    }

    return null;
  }

  getUserName(user: User) {
    return user.name;
  }
 }

interface FormData {
  subject: string;
  user: string;
  targetDate: Date | null;
  isCompleted: boolean;
}
