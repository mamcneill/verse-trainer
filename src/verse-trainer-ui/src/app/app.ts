import { Component, inject } from '@angular/core';
import { Verse, VersesService } from './verses.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private versesService = inject(VersesService);
  verses$ = this.versesService.getAll();
  newVerse = '';
  newVerseReference = '';

  addVerse() {
    const trimmed = this.newVerse.trim();
    const referenceTrimmed = this.newVerseReference.trim();
    if (!trimmed || !referenceTrimmed) return;

    const verseToAdd = { text: trimmed, reference: referenceTrimmed };
    this.versesService.add(verseToAdd).subscribe({
      next: (verse) => {
        this.verses$ = this.versesService.getAll();
        this.newVerse = '';
        this.newVerseReference = '';
      },
      error: (err) => console.error('Failed to add verse', err),
    });
  }

  removeVerse(verse: Verse) {
    this.versesService.delete(verse.id).subscribe({
      next: () => {
        this.verses$ = this.versesService.getAll();
      },
      error: (err) => console.error('Failed to delete verse', err),
    });
  }
}
