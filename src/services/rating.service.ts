import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  private selectedRating: WritableSignal<string | null> = signal<string | null>(
    ''
  );

  constructor() {}

  setRating(rating: string | null) {
    this.selectedRating.set(rating);
  }

  getRating() {
    return this.selectedRating();
  }
}
