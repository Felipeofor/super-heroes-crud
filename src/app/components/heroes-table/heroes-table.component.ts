import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SuperHeroService } from '../../services/super-hero.service';
import { SuperHero } from '../../models/super-hero.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CreateHeroDialogComponent } from '../create-hero-dialog/create-hero-dialog.component';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss']
})
export class HeroesTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'powers', 'origin', 'actions'];
  dataSource = new MatTableDataSource<SuperHero>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private superHeroService: SuperHeroService, private dialog: MatDialog) { }

  ngOnInit() {
    this.superHeroService.getAllHeroes().subscribe((heroes: SuperHero[]) => {
      this.dataSource.data = heroes;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editHero(hero: SuperHero): void {
    const dialogRef = this.dialog.open(CreateHeroDialogComponent, {
      width: '70vh',
      data: hero
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (hero) {
          this.superHeroService.updateHero(hero.id!, result).subscribe(updatedHero => {
            this.dataSource.data = this.dataSource.data.map(h => h.id === updatedHero.id ? updatedHero
              : h);
          });
        } else {
          this.superHeroService.addHero(result).subscribe(newHero => {
            this.dataSource.data = [...this.dataSource.data, newHero];
          });
        }
      }
    });
  }

  deleteHero(hero: SuperHero): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (hero.id !== undefined) {
          this.superHeroService.deleteHero(hero.id).subscribe(
            () => {
              this.dataSource.data = this.dataSource.data.filter(h => h.id !== hero.id);
            },
            error => {
              console.error('Error eliminando héroe', error);
            }
          );
        }
      }
    });
  }
  
}
