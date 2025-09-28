import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonalInfo } from './personal-info';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'nevy11-personal-info',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent {
  @Input() data?: PersonalInfo;
  @Output() dataChange = new EventEmitter<PersonalInfo>();

  personalInfoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.personalInfoForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^[0-9\\-\\+\\s\\(\\)]*$')],
      ],
      location: ['', Validators.required],
    });

    // Emit value changes automatically
    this.personalInfoForm.valueChanges.subscribe((value) => {
      if (this.personalInfoForm.valid) {
        this.dataChange.emit(value);
      }
    });
  }

  ngOnInit() {
    if (this.data) {
      this.personalInfoForm.patchValue(this.data);
    }
  }
}
