import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VersesService } from './verses.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private versesService = inject(VersesService);
  verses$ = this.versesService.getAll();
}
