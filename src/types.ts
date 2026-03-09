export type PieceType = 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king';
export type Color = 'white' | 'black';

export interface Position {
  x: number; // 0-7 (a-h)
  y: number; // 0-7 (1-8)
}

export interface ChessPiece {
  id: string;
  type: PieceType;
  color: Color;
  position: Position;
  targetPosition?: Position;
  sectionId: string;
  label: string;
}

export type SectionId = 'portfolio' | 'about' | 'contact' | 'home';
