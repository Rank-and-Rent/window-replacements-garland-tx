import Link from 'next/link';

interface BrandLogosProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function BrandLogos({ className = '', size = 'md' }: BrandLogosProps) {
  const sizeClasses = {
    sm: 'h-8 lg:h-10',
    md: 'h-12 lg:h-14',
    lg: 'h-16 lg:h-20'
  };

  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 lg:gap-6 ${className}`}>
      {/* Andersen */}
      <Link href="/brands/andersen-windows-doors" className="hover:opacity-80 transition-opacity">
        <img
          src="/andersen-windows-and-doors-garland-tx-logo.png"
          alt="Andersen Windows & Doors"
          className={`${sizeClasses[size]} w-auto`}
        />
      </Link>

      {/* Pella */}
      <Link href="/brands/pella-windows-doors" className="hover:opacity-80 transition-opacity">
        <img
          src="/pella-windows-and-doors-garland-tx-logo.png"
          alt="Pella Windows & Doors"
          className={`${sizeClasses[size]} w-auto`}
        />
      </Link>

      {/* Jeld-Wen */}
      <Link href="/brands/jeld-wen-windows-doors" className="hover:opacity-80 transition-opacity">
        <img
          src="/jeld-wen-windows-and-doors-garland-tx-logo.png"
          alt="Jeld-Wen Windows & Doors"
          className={`${sizeClasses[size]} w-auto`}
        />
      </Link>

      {/* Marvin */}
      <Link href="/brands/marvin-windows-doors" className="hover:opacity-80 transition-opacity">
        <img
          src="/marvin-windows-and-doors-garland-tx-logo.png"
          alt="Marvin Windows & Doors"
          className={`${sizeClasses[size]} w-auto`}
        />
      </Link>
    </div>
  );
}