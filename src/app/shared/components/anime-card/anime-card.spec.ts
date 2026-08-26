import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCardComponent } from './anime-card';

describe('AnimeCardComponent', () => {

  let component: AnimeCardComponent;
  let fixture: ComponentFixture<AnimeCardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AnimeCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimeCardComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('deve criar o componente', () => {

    expect(component).toBeTruthy();

  });

});