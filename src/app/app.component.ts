import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNameComponent } from './top-name/top-name.component';
import { PersonalInfo } from './personal-info/personal-info';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'nevy11-root',
  imports: [
    RouterOutlet,
    TopNameComponent,
    MatCardModule,
    MatIconModule,
    PersonalInfoComponent,
    JsonPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'resume-app';
  resumeData = {
    personalInfo: {
      fullName: 'Stephen Mainda',
      title: 'Software Developer',
      email: 'smongare2003@gmail.com',
      phone: '+254 792 700 138',
      location: 'Nairobi, Kenya',
    } as PersonalInfo,
  };
}
