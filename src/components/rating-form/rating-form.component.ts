import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rating-form',
  standalone: true,
  imports: [],
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.scss',
})
export class RatingFormComponent {
  selectedRating = new FormControl('');

  setRating(event: MouseEvent) {
    const target = event.target as HTMLElement;

    this.selectedRating.setValue(target.innerHTML);
  }

  submitRating() {
    console.log(this.selectedRating.value);
  }
}
