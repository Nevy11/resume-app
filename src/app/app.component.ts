import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNameComponent } from './top-name/top-name.component';

@Component({
  selector: 'nevy11-root',
  imports: [RouterOutlet, TopNameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resume-app';
}
