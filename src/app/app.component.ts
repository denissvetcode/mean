import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;

  // Define a users property to hold our user data
  users: Array<any>;
  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {
    // Access the Data Service's getUsers() method we defined
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }
  addUser() {
    event.preventDefault();
    const newUser = {
      name: this.name
    };
    this._dataService.addUser(newUser).subscribe(user => {
      this.users.push(user);
    });
  }
}
