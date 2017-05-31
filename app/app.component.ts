import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: [
  	'./app/app.component.css'
  ]
})

export class AppComponent {

	users: User[] = [
	{ id: 1, name: 'zae', username: 'zenal' },
	{ id: 2, name: 'mae', username: 'mae' },
	{ id: 3, name: 'nano', username: 'nano' },
	{ id: 4, name: 'dino', username: 'dino' }
	];

	activeUser: User;

	selectUser(user) {
		this.activeUser = user;
		console.log(this.activeUser);
	}

	onUserCreated(event) {
		this.users.push(event.user);
		console.log(event)
	}
}