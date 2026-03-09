import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Position, ChessPiece, SectionId } from '../types';
import { INITIAL_PIECES, TARGET_SQUARES } from '../constants';
import { getLegalMoves } from '../utils/chessLogic';
import Piece from './Piece';

interface ChessBoardProps {
  onSectionChange: (section: SectionId) => void;
}

const ChessBoard: React.FC<ChessBoardProps> = ({ onSectionChange }) => {
  const [pieces, setPieces] = useState<ChessPiece[]>(INITIAL_PIECES);
  const [selectedPieceId, setSelectedPieceId] = useState<string | null>(null);
  const [legalMoves, setLegalMoves] = useState<Position[]>([]);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>({
    text: "Move a piece to its target square to navigate.",
    type: 'info'
  });

  const selectedPiece = pieces.find(p => p.id === selectedPieceId);

  const handleSquareClick = (x: number, y: number) => {
    // Check if it's a target square first for direct navigation
    const target = TARGET_SQUARES.find(t => t.x === x && t.y === y);
    if (target) {
      setMessage({ text: `Loading ${target.label}...`, type: 'success' });
      setTimeout(() => {
        onSectionChange(target.sectionId as SectionId);
      }, 300);
      return;
    }

    if (selectedPieceId) {
      const isLegal = legalMoves.some(m => m.x === x && m.y === y);
      
      if (isLegal) {
        movePiece(selectedPieceId, { x, y });
      } else {
        // If clicking another piece of ours, select it instead
        const clickedPiece = pieces.find(p => p.position.x === x && p.position.y === y);
        if (clickedPiece) {
          setSelectedPieceId(clickedPiece.id);
        } else {
          setSelectedPieceId(null);
          setLegalMoves([]);
        }
      }
    } else {
      const clickedPiece = pieces.find(p => p.position.x === x && p.position.y === y);
      if (clickedPiece) {
        setSelectedPieceId(clickedPiece.id);
      }
    }
  };

  useEffect(() => {
    if (selectedPiece) {
      const moves = getLegalMoves(selectedPiece.type, selectedPiece.position, pieces);
      setLegalMoves(moves);
    } else {
      setLegalMoves([]);
    }
  }, [selectedPieceId, pieces]);

  const movePiece = (id: string, to: Position) => {
    const piece = pieces.find(p => p.id === id);
    if (!piece) return;

    const newPieces = pieces.map(p => 
      p.id === id ? { ...p, position: to } : p
    );
    setPieces(newPieces);
    setSelectedPieceId(null);
    setLegalMoves([]);

    const target = TARGET_SQUARES.find(t => t.x === to.x && t.y === to.y);
    if (target) {
      setMessage({ text: `Checkmate! Loading ${target.label}...`, type: 'success' });
      setTimeout(() => {
        onSectionChange(target.sectionId as SectionId);
      }, 800);
    } else {
      setMessage({ text: "Legal move made. Keep going!", type: 'info' });
    }
  };

  const renderSquare = (x: number, y: number) => {
    const isDark = (x + y) % 2 === 1;
    const piece = pieces.find(p => p.position.x === x && p.position.y === y);
    const isLegalMove = legalMoves.some(m => m.x === x && m.y === y);
    const targetSquare = TARGET_SQUARES.find(t => t.x === x && t.y === y);
    const isTargetSquare = !!targetSquare;

    return (
      <div
        key={`${x}-${y}`}
        className={`square ${isDark ? 'square-dark' : 'square-light'} cursor-pointer`}
        onClick={() => handleSquareClick(x, y)}
      >
        {/* Coordinates for edge squares */}
        {x === 0 && (
          <span className="absolute left-0.5 top-0.5 text-[8px] text-black/40 pointer-events-none font-mono">
            {8 - y}
          </span>
        )}
        {y === 7 && (
          <span className="absolute right-0.5 bottom-0.5 text-[8px] text-black/40 pointer-events-none font-mono">
            {String.fromCharCode(97 + x)}
          </span>
        )}

        {isTargetSquare && (
          <div className="target-square-highlight flex items-center justify-center border-2 border-black/10">
            <span className="text-[10px] font-black uppercase text-black text-center leading-tight px-1 tracking-tighter drop-shadow-sm">
              {targetSquare.label}
            </span>
          </div>
        )}

        {isLegalMove && <div className="legal-move-dot" />}

        {piece && (
          <Piece
            type={piece.type}
            color={piece.color}
            isSelected={selectedPieceId === piece.id}
            onClick={() => setSelectedPieceId(piece.id)}
          />
        )}
      </div>
    );
  };

  const board = [];
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      board.push(renderSquare(x, y));
    }
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-2xl mx-auto">
      <div className="w-full bg-card-bg p-4 rounded-xl border border-white/10 shadow-2xl">
        <div className="chess-board rounded-lg overflow-hidden">
          {board}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`px-6 py-3 rounded-full text-sm font-medium border ${
              message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' :
              message.type === 'error' ? 'bg-red-500/10 border-red-500/50 text-red-400' :
              'bg-blue-500/10 border-blue-500/50 text-blue-400'
            }`}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChessBoard;
