import { Position, PieceType } from '../types';

export const isLegalMove = (
  type: PieceType,
  from: Position,
  to: Position,
  allPieces: { position: Position }[]
): boolean => {
  const dx = Math.abs(to.x - from.x);
  const dy = Math.abs(to.y - from.y);

  // Cannot move to the same square
  if (dx === 0 && dy === 0) return false;

  // Check if target square is occupied by another piece
  const isOccupied = allPieces.some(p => p.position.x === to.x && p.position.y === to.y);
  if (isOccupied) return false;

  switch (type) {
    case 'knight':
      return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);

    case 'rook':
      if (dx !== 0 && dy !== 0) return false;
      return isPathClear(from, to, allPieces);

    case 'bishop':
      if (dx !== dy) return false;
      return isPathClear(from, to, allPieces);

    case 'queen':
      if (dx !== dy && dx !== 0 && dy !== 0) return false;
      return isPathClear(from, to, allPieces);

    case 'king':
      return dx <= 1 && dy <= 1;

    case 'pawn':
      // Simplified pawn move for this specific app (only forward)
      return dx === 0 && dy === 1;

    default:
      return false;
  }
};

const isPathClear = (
  from: Position,
  to: Position,
  allPieces: { position: Position }[]
): boolean => {
  const dx = Math.sign(to.x - from.x);
  const dy = Math.sign(to.y - from.y);

  let curX = from.x + dx;
  let curY = from.y + dy;

  while (curX !== to.x || curY !== to.y) {
    if (allPieces.some(p => p.position.x === curX && p.position.y === curY)) {
      return false;
    }
    curX += dx;
    curY += dy;
  }

  return true;
};

export const getLegalMoves = (
  type: PieceType,
  from: Position,
  allPieces: { position: Position }[]
): Position[] => {
  const moves: Position[] = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (isLegalMove(type, from, { x, y }, allPieces)) {
        moves.push({ x, y });
      }
    }
  }
  return moves;
};
