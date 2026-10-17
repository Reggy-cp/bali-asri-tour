import React from 'react';

interface PriceDisplayProps {
  amount: number;
  currency?: string;
  period?: string;
  note?: string;
  size?: 'sm' | 'md' | 'lg';
  prefix?: string;
  className?: string;
}

export default function PriceDisplay({
  amount,
  currency = 'USD',
  period,
  note,
  size = 'md',
  prefix,
  className = '',
}: PriceDisplayProps) {
  const formattedAmount = currency === 'USD' ? `$${amount}` : `Rp ${amount.toLocaleString('id-ID')}`;

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl sm:text-4xl',
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-baseline gap-1">
        {prefix && <span className="text-xs text-body-muted font-normal">{prefix}</span>}
        <span className={`font-heading font-bold text-brand-secondary ${sizeClasses[size]}`}>
          {formattedAmount}
        </span>
        {period && <span className="text-xs text-body-muted font-normal"> / {period}</span>}
      </div>
      {note && <span className="text-[11px] text-body-muted mt-0.5">{note}</span>}
    </div>
  );
}
