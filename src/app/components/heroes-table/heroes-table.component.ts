import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SuperHeroService } from '../../services/super-hero.service';
import { SuperHero } from '../../models/super-hero.model';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss']
})
export class HeroesTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'powers', 'alterEgo'];
  dataSource = new MatTableDataSource<SuperHero>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit() {
    this.superHeroService.getAllHeroes().subscribe((heroes: SuperHero[]) => {
      console.log(heroes);
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
}
