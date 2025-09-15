import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ResumeService } from '../../resume.service';
import { Resume } from '../../resume';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-resume',
  imports: [MatCardModule, CommonModule, MatIconModule, MatChipsModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  resume!: Resume; // The resume data

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    // Fetch the resume data from the service
    this.resume = this.resumeService.getResume();
  }
}
