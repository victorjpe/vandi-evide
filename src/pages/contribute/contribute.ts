import { Component } from '@angular/core';

@Component({
	selector: 'page-contribute',
  templateUrl: 'contribute.html'
})
export class ContributePage {
	rating : number = 0;
	stars : any[] = [0, 1, 2, 3, 4];

	updateRating(index) {
		this.rating = index+1;
	}
}