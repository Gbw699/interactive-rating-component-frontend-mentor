import { Component, ElementRef, viewChildren } from '@angular/core';
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
  listItems = viewChildren<ElementRef<HTMLButtonElement>>('listItem');

  constructor(private ratingServcie: RatingService) {}

  setRating(ratingNumber: number) {
    this.selectedRating.setValue(`${ratingNumber}`);

    this.listItems().forEach((item) => {
      item.nativeElement.classList.remove('selected-item');
    });

    this.listItems()[ratingNumber - 1].nativeElement.classList.add(
      'selected-item'
    );
  }

  submitRating() {
    this.ratingServcie.setRating(this.selectedRating.value);
  }
}
