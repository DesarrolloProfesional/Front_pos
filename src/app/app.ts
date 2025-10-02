import { Component, signal } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Front-pos');
  pago: 'cash' | 'card' | null = null;
}
