import { TestBed, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import { App } from './app';
import { VersesService } from './verses.service';

describe('App (mocked VersesService)', () => {
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    const mockVerses = [{ id: 1, reference: 'John 3:16', text: 'For God so loved the world' }];
    const versesStub = { getAll: () => of(mockVerses) } as Partial<VersesService>;

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [{ provide: VersesService, useValue: versesStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    fixture.detectChanges();
  });

  it('creates and renders verses from the service', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('li').length).toBe(1);
    expect(el.textContent).toContain('John 3:16');
  });
});
