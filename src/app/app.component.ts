import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RatingFormComponent } from '../components/rating-form/rating-form.component';
import { ThankYouComponent } from '../components/thank-you/thank-you.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RatingFormComponent, ThankYouComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'interactive-rating-component';
}
