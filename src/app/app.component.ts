import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MemoizedPipe } from './memoized.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MemoizedPipe],
  styleUrl: './app.component.scss',
  template: `
    <div>
      <h1>Factorial Calculator</h1>
      <input type="number" [(ngModel)]="number" placeholder="Enter a number" />
      <p>Factorial: {{ number | factorialMemoized }}</p>
    </div>
    <button (click)="randomButtonClick()">Random btn</button>
  `,
})
export class AppComponent {
  number: number = 5;

  randomButtonClick() {
    console.log('random clicked')
  }
}
