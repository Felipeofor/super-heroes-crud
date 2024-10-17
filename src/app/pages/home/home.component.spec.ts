import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar'; // Importa el módulo de MatToolbar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necesario para animaciones
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { HeroesTableComponent } from 'src/app/components/heroes-table/heroes-table.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatIconModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule
      ],
      declarations: [ HomeComponent, HeroesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
