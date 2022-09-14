import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ITableCell, ITableCellButton, ITableConfig } from '../table/interfaces/table-config.interface';

@Component({
  selector: 'mhr-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
  //TODO: read about on push
})
export class TableCellComponent {
  @Input()
  public mhrTableCellConfig: ITableCell;
}
