import { Component } from '@angular/core';

import {
  RouterLinkActive,
  RouterLinkWithHref,
  RouterOutlet,
} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PasswordStrengthMeterComponent } from 'angular-password-strength-meter';

@Component({
    selector: 'app-root',
    imports: [
    RouterOutlet,
    RouterLinkWithHref,
    RouterLinkActive,
    FormsModule,
    PasswordStrengthMeterComponent
],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text: string = '';
  score: number | null = null;

  public onPasswordStrengthChange(score: number | null) {
    this.score = score;
  }
}
