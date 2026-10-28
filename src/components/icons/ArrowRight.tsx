import React from 'react';

export interface ArrowRightProps {
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowRight: React.FC<ArrowRightProps> = ({
  className = '',
  size = 15,
  strokeWidth = 1.8,
}) => {
  return (
    <svg
      className={`arrow-icon ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
};

export default ArrowRight;
