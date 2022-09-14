import { Expansion } from '@angular/compiler';

export interface ITableConfig{
  headers: Array<string>;
  rows: Array<Array<ITableCell<unknown>>>;
}

export enum TableCellType {
  TEXT,
  BUTTON,
  IMAGE,

}

export interface ITableCell<TValue = unknown> {
  type: TableCellType;
  value: TValue;
}

export interface ITableCellText extends ITableCell<string>{
}

export interface ITableCellImage extends ITableCell<string>{
  altText: string;
}

export interface ITableCellButton extends ITableCell<IButton>{
}

export interface IButton{
  text: string;
  action: () => void | Promise<void>
}




