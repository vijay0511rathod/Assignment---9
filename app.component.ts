import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellouschkPipe } from './marvellouschk.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarvellouschkPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Q3';
}
