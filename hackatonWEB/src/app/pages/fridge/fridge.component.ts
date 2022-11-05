import { Component, OnInit, ViewChild } from '@angular/core';
import { Fridge_entries } from 'src/app/models/fridge_entries';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatTable} from '@angular/material/table';
import { FridgeService } from 'src/app/services/fridge.service';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FridgeComponent implements OnInit {
  dataSource: Fridge_entries[];
  displayedColumns: string[] = ['#', 'name'];
  displayedColumnsWithExpand: string[] = [...this.displayedColumns, 'expand']
  expandedElement: Fridge_entries;

  @ViewChild(MatTable) table: MatTable<any>;
  constructor(private fridgeService: FridgeService) { }

  ngOnInit(): void {
    this.fridgeService.getEntries(Fridge_entries => {
      console.log(Fridge_entries);
      this.dataSource = Fridge_entries;
    })
  }
}
