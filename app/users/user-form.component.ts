import { Component,Output,EventEmitter } from '@angular/core';
import {User } from '../shared/models/user';

@Component({
	selector: 'user-form',
	styles: [`
		form {
			padding: 10px;
			border: 3px;
			background-color: #E6E6E6;	
		}
	`],
	template: `
		<form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">
			<div class="form-group" [ngClass]="{'has-error': name.invalid && name.touched }">
				<input type="text" class="form-control" name="name" required
				[(ngModel)]="newUser.name" #name="ngModel"
				/>
				<span class="help-block" *ngIf="name.invalid && name.touched">name is required</span>
			</div>

			<div class="form-group" [ngClass]="{'has-error': form.invalid && username.touched }">
				<input type="text" class="form-control" name="username" required
				[(ngModel)]="newUser.username" #username="ngModel"
				/>
				<span class="help-block" *ngIf="username.invalid && username.touched">username is required</span>
			</div>

			<div class="form-group">
				<button class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
					Create User
				</button>
			</div>
		</form>
	`, 
})

export class UserFormComponent{
	@Output() userCreated = new EventEmitter();

	newUser: User = new User();
	active: boolean = true;

	onSubmit(){
		//show the event that the user was created
		this.userCreated.emit({user: this.newUser});

		this.newUser = new User; //reset value of the field
		this.active = false; //destroy the form
		setTimeout(() => this.active = true,0); //destroy the form and bring it back
	}
}