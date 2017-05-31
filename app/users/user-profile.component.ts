import { Component,Input } from '@angular/core';
import { User } from '../shared/models/user'

@Component({
	selector: 'user-profile',
	template: `
		<div class="jumbotron" *ngIf="!user">
			<span class="glyphicon glyphicon-hand-left"></span>
			<h2>choose a user</h2>
		</div>
	    <div class="jumbotron" *ngIf="user">
	    	<h2>{{ user.name }} <small>{{ user.username }}</small></h2>
	    	<input type="text" class="form-control" [(ngModel)]="user.username"/>
	    </div>
	`

})

export class UserProfileComponent{
	@Input() user: User;
}