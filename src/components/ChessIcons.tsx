import React from 'react';

export const KnightIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 45 45" fill={color} stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <g fill={color}>
      <path d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18" />
      <path d="M 24,18 C 24.5,17 24.5,14.5 22,14.5 C 19,14.5 19,17 19.5,18 C 20,19 21,19 22,19 C 23,19 23.5,18.5 24,18 z" />
      <path d="M 9.5,25.5 A 0.5,0.5 0 1 1 8.5,25.5 A 0.5,0.5 0 1 1 9.5,25.5 z" fill="#fff" />
    </g>
  </svg>
);

export const RookIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 45 45" fill={color} stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <g fill={color}>
      <path d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z" />
      <path d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z" />
      <path d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14" />
      <path d="M 34,14 L 31,17 L 14,17 L 11,14" />
      <path d="M 31,17 L 31,29.5 L 14,29.5 L 14,17" />
      <path d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />
    </g>
  </svg>
);

export const QueenIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 45 45" fill={color} stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <g fill={color}>
      <path d="M 22.5,12 C 22.5,12 14.5,21 14.5,31 C 14.5,39 22.5,39 22.5,39 C 22.5,39 30.5,39 30.5,31 C 30.5,21 22.5,12 22.5,12 z" />
      <path d="M 11.5,37 C 17,40.5 28,40.5 33.5,37 L 33.5,30 C 33.5,30 28,26.5 22.5,26.5 C 17,26.5 11.5,30 11.5,30 L 11.5,37 z" />
      <path d="M 11.5,30 C 11.5,30 17,26.5 22.5,26.5 C 28,26.5 33.5,30 33.5,30 C 33.5,30 38.5,24 38.5,18 C 38.5,12 33.5,7 22.5,7 C 11.5,7 6.5,12 6.5,18 C 6.5,24 11.5,30 11.5,30 z" />
      <circle cx="22.5" cy="3.5" r="2.5" />
      <path d="M 9,10 L 12,13.5 L 15,10 L 18,13.5 L 21,10 L 24,13.5 L 27,10 L 30,13.5 L 33,10 L 36,13.5 L 36,18 L 9,18 L 9,10 z" />
    </g>
  </svg>
);

export const KingIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 45 45" fill={color} stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <g fill={color}>
      <path d="M 22.5,11.63 L 22.5,6" />
      <path d="M 20,8 L 25,8" />
      <path d="M 22.5,25 C 22.5,25 27,17.5 27,12 C 27,7 22.5,7 22.5,7 C 22.5,7 18,7 18,12 C 18,17.5 22.5,25 22.5,25" />
      <path d="M 11.5,37 C 17,40.5 28,40.5 33.5,37 L 33.5,30 C 33.5,30 28,26.5 22.5,26.5 C 17,26.5 11.5,30 11.5,30 L 11.5,37 z" />
      <path d="M 11.5,30 C 11.5,30 17,26.5 22.5,26.5 C 28,26.5 33.5,30 33.5,30 C 33.5,30 38.5,24 38.5,18 C 38.5,12 33.5,7 22.5,7 C 11.5,7 6.5,12 6.5,18 C 6.5,24 11.5,30 11.5,30 z" />
      <path d="M 11.5,30 C 11.5,30 17,26.5 22.5,26.5 C 28,26.5 33.5,30 33.5,30 C 33.5,30 38.5,24 38.5,18 C 38.5,12 33.5,7 22.5,7 C 11.5,7 6.5,12 6.5,18 C 6.5,24 11.5,30 11.5,30 z" style={{ display: 'none' }} />
      <path d="M 22.5,11.63 L 22.5,6" />
      <path d="M 20,8 L 25,8" />
    </g>
  </svg>
);

export const BishopIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 45 45" fill={color} stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <g fill={color}>
      <g strokeLinecap="butt">
        <path d="M 9,36 C 12.39,35.03 19.11,33.88 22.5,33.88 C 25.89,33.88 32.61,35.03 36,36 L 36,39 L 9,39 L 9,36 z" />
        <path d="M 15,32 L 15,36 L 30,36 L 30,32 L 15,32 z" />
        <path d="M 25,8 C 25,8 21,8.5 21,12 C 21,15.5 25,16 25,16 L 25,8 z" style={{ display: 'none' }} />
        <path d="M 25,8 L 25,16" style={{ display: 'none' }} />
      </g>
      <path d="M 22.5,9 C 22.5,9 16.5,13 16.5,20 C 16.5,27 22.5,32 22.5,32 C 22.5,32 28.5,27 28.5,20 C 28.5,13 22.5,9 22.5,9 z" />
      <path d="M 17.5,26 C 17.5,26 22.5,24.5 27.5,26" fill="none" />
      <circle cx="22.5" cy="5" r="2" />
    </g>
  </svg>
);

export const PawnIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 45 45" fill={color} stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 22.5,9 C 19.6,9 17.2,11.3 17.2,14.2 C 17.2,15.5 17.7,16.7 18.5,17.7 C 15.5,19.9 13,23.9 13,28.9 L 32,28.9 C 32,23.9 29.5,19.9 26.5,17.7 C 27.3,16.7 27.8,15.5 27.8,14.2 C 27.8,11.3 25.4,9 22.5,9 z" />
    <path d="M 9,36 C 12.39,35.03 19.11,33.88 22.5,33.88 C 25.89,33.88 32.61,35.03 36,36 L 36,39 L 9,39 L 9,36 z" />
    <path d="M 15,32 L 15,36 L 30,36 L 30,32 L 15,32 z" />
  </svg>
);
