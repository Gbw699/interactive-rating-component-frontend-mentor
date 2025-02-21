import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-rating-form',
  standalone: true,
  imports: [],
  templateUrl: './rating-form.component.html',
  styleUrl: './rating-form.component.scss',
})
export class RatingFormComponent {
  selectedRating: FormControl<string | null> = new FormControl<string>('');

  constructor(private ratingServcie: RatingService) {}

  setRating(event: MouseEvent) {
    const target = event.target as HTMLElement;

    this.selectedRating.setValue(target.innerHTML);
  }

  submitRating() {
    this.ratingServcie.setRating(this.selectedRating.value);
  }
}
