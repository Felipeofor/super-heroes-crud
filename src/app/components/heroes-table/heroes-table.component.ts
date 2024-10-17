import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SuperHeroService } from '../../services/super-hero.service';
import { SuperHero } from '../../models/super-hero.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { CreateHeroDialogComponent } from '../create-hero-dialog/create-hero-dialog.component';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss']
})
export class HeroesTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'powers', 'origin', 'actions'];
  dataSource = new MatTableDataSource<SuperHero>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SuperHero>;

  constructor(private superHeroService: SuperHeroService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllHeroes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllHeroes() {
    this.superHeroService.getAllHeroes().subscribe((heroes: SuperHero[]) => {
      this.dataSource.data = heroes;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

  createHero(): void {
    const dialogRef = this.dialog.open(CreateHeroDialogComponent, {
      width: '70vh',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.superHeroService.addHero(result).subscribe(newHero => {
          this.getAllHeroes();
          this.table.renderRows();
          this.dialog.open(DialogErrorComponent, {
            data: { message: 'Héroe creado correctamente', title: 'Éxito' }
          });
        });
      }
    });
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
            this.getAllHeroes();
            this.table.renderRows();
            this.dialog.open(DialogErrorComponent, {
              data: { message: 'Héroe actualizado correctamente', title: 'Éxito' }});
          });
        } else {
          this.superHeroService.addHero(result).subscribe(newHero => {
            this.getAllHeroes();
            this.table.renderRows();
            this.dialog.open(DialogErrorComponent, {
              data: { message: 'Héroe creado correctamente', title: 'Éxito' }
            });
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
              this.getAllHeroes();
              this.table.renderRows();
              this.dialog.open(DialogErrorComponent, {
                data: { message: 'Héroe eliminado correctamente', title: 'Éxito' }
              });
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
