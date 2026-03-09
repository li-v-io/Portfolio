import { ChessPiece } from './types';

export const TARGET_SQUARES = [
  { x: 4, y: 5, sectionId: 'about', label: 'About Me' },
  { x: 6, y: 4, sectionId: 'portfolio', label: 'Portfolio' },
  { x: 0, y: 3, sectionId: 'contact', label: 'Contact' },
];

export const INITIAL_PIECES: ChessPiece[] = [
  {
    id: 'knight',
    type: 'knight',
    color: 'black',
    position: { x: 5, y: 7 }, // f1
    sectionId: 'about',
    label: 'About Me',
  },
  {
    id: 'queen',
    type: 'queen',
    color: 'black',
    position: { x: 3, y: 7 }, // d1
    sectionId: 'portfolio',
    label: 'Portfolio',
  },
  {
    id: 'rook',
    type: 'rook',
    color: 'black',
    position: { x: 0, y: 7 }, // a1
    sectionId: 'contact',
    label: 'Contact',
  },
];
