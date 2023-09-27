import { Component } from "@angular/core";
import { HttpService } from "src/app/Api/http.service";
import { Project } from "src/components/card/card.component";


@Component({
    selector: 'user-management-page',
    templateUrl: 'user-management-page.component.html',
    styleUrls: ['user-management-page.component.css']
})
export class UserManagementPage {
    cardDataList!: Project[];
    users!: User[];

    constructor(private httpService: HttpService) {
        this.httpService = httpService;
    }    

    ngOnInit() {
        this.httpService.getData("UserManagement/GetProjectsAndUsers").subscribe((response) => {
            let data = response as InitDataRequestResponse
            this.cardDataList = data.projects;
            this.users = data.users;
            this.getUserNames();
        });
    }

    getUserNames() {
        return this.cardDataList.forEach(p => p.userName = this.users.find(u => u.id === p.userId)!.name)
    }

    addProject(project: Project) {
        this.cardDataList.push(project)
    }
}

export interface User {
    name: string,
    id: number
}

interface InitDataRequestResponse {
    projects: Project[];
    users: User[];
}