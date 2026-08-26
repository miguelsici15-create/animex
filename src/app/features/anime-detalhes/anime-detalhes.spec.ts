import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimeDetalhes } from './anime-detalhes';

describe('AnimeDetalhes', () => {
  let component: AnimeDetalhes;
  let fixture: ComponentFixture<AnimeDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimeDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
