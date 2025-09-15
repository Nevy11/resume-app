import { Component } from '@angular/core';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-pages',
  imports: [ResumeComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent {}
