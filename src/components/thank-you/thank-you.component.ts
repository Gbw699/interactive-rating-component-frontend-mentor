import { Component, computed, Signal } from '@angular/core';

import { RatingService } from '../../services/rating.service';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss',
})
export class ThankYouComponent {
  selectedRating: Signal<string | null> = computed(() => {
    return this.ratingService.getRating();
  });

  constructor(private ratingService: RatingService) {}
}
