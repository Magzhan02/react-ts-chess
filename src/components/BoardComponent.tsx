import React, { FC, useState, useEffect } from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  function onClick(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  function highLightCells() {
    board.highLightCells(selectedCell);
    updateBoard();
  }

  useEffect(() => {
    highLightCells();
  }, [selectedCell]);

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
              click={onClick}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
