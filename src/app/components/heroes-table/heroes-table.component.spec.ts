import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesTableComponent } from './heroes-table.component';
import { SuperHeroService } from '../../services/super-hero.service';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { SuperHero } from '../../models/super-hero.model';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroesTableComponent', () => {
  let component: HeroesTableComponent;
  let fixture: ComponentFixture<HeroesTableComponent>;
  let superHeroServiceSpy: jasmine.SpyObj<SuperHeroService>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  const mockHeroes: SuperHero[] = [
    { id: 1, name: 'Superman', powers: ['Flight', 'Super Strength'], origin: 'Krypton' },
    { id: 2, name: 'Batman', powers: ['Martial Arts', 'Intelligence'], origin: 'Gotham' }
  ];

  beforeEach(async () => {
    const superHeroSpy = jasmine.createSpyObj('SuperHeroService', ['getAllHeroes', 'addHero', 'updateHero', 'deleteHero']);
    const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [HeroesTableComponent],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientTestingModule,
      ],
      providers: [
        SuperHeroService,
        { provide: SuperHeroService, useValue: superHeroSpy },
        { provide: MatDialog, useValue: dialogMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesTableComponent);
    component = fixture.componentInstance;
    superHeroServiceSpy = TestBed.inject(SuperHeroService) as jasmine.SpyObj<SuperHeroService>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;

    superHeroServiceSpy.getAllHeroes.and.returnValue(of(mockHeroes));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load heroes on initialization', () => {
    expect(component.dataSource.data).toEqual(mockHeroes);
    expect(superHeroServiceSpy.getAllHeroes).toHaveBeenCalled();
  });

  it('should filter heroes', () => {
    component.applyFilter({ target: { value: 'batman' } } as unknown as Event);
    expect(component.dataSource.filter).toBe('batman');
  });
  
});
