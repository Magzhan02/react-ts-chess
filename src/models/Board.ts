import { Colors } from './Colors';
import { Cell } from './Cell';

export class Board {
  cells: Cell[][] = [];

  public initialCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null)); // Black cell
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null)); // White cell
        }
      }
      this.cells.push(row);
    }
  }
}
