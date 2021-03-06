import { SFC, HTMLProps } from 'react';

export interface DataListCellProps extends HTMLProps<HTMLDivElement> {
  width: 1 | 2 | 3 | 4 | 5;
}

declare const DataListCell: SFC<DataListCellProps>;

export default DataListCell;
