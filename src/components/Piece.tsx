import React from 'react';
import { motion } from 'motion/react';
import { PieceType, Color } from '../types';
import { KnightIcon, RookIcon, QueenIcon, KingIcon, BishopIcon, PawnIcon } from './ChessIcons';

interface PieceProps {
  type: PieceType;
  color: Color;
  isSelected: boolean;
  onClick: () => void;
}

const Piece: React.FC<PieceProps> = ({ type, color, isSelected, onClick }) => {
  const getIcon = () => {
    const defaultSize = 36;
    const rookSize = 30; // Smaller as requested
    const size = type === 'rook' ? rookSize : defaultSize;
    const iconColor = color === 'white' ? '#fff' : '#1a1a1a';

    // Use PNGs for pieces that have them in /public
    const hasPng = ['knight', 'queen', 'rook'].includes(type);
    
    if (hasPng) {
      const baseUrl = import.meta.env.BASE_URL || '/';
      const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
      const assetPath = `${cleanBase}/${type}.png`;
      return (
        <img 
          src={assetPath} 
          alt={`${color} ${type}`}
          style={{ 
            width: size, 
            height: size, 
            filter: color === 'black' ? 'brightness(0.3) contrast(1.2)' : 'none',
            objectFit: 'contain'
          }}
        />
      );
    }

    switch (type) {
      case 'king': return <KingIcon size={size} color={iconColor} />;
      case 'bishop': return <BishopIcon size={size} color={iconColor} />;
      case 'pawn': return <PawnIcon size={size} color={iconColor} />;
      default: return null;
    }
  };

  return (
    <motion.div
      className={`relative cursor-pointer flex flex-col items-center justify-center z-10 ${isSelected ? 'scale-110' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className={`p-1 rounded-full transition-all duration-200 ${isSelected ? 'bg-yellow-400/50 shadow-lg shadow-yellow-400/20' : 'drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'}`}>
        {getIcon()}
      </div>
    </motion.div>
  );
};

export default Piece;
