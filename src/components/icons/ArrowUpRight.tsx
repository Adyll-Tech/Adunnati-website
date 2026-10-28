import React from 'react';

export interface ArrowUpRightProps {
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

export const ArrowUpRight: React.FC<ArrowUpRightProps> = ({
  className = '',
  size = 14,
  strokeWidth = 2.2,
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
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
};

export default ArrowUpRight;
