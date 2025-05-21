import React from 'react';

type BlurEffectProps = {
  className?: string;
  intensity?: number;
  position?: 'top' | 'bottom' | 'left' | 'right';
};

export default function BlurEffect({
  className = '',
  intensity = 50,
  position = 'bottom'
}: BlurEffectProps) {
  const intensityFactor = intensity / 50;

  const blurLayers = [
    { blur: `${1 * intensityFactor}px`, maskStart: 0, maskEnd: 25, zIndex: 1 },
    { blur: `${3 * intensityFactor}px`, maskStart: 25, maskEnd: 75, zIndex: 2 },
    { blur: `${6 * intensityFactor}px`, maskStart: 75, maskEnd: 100, zIndex: 3 }
  ];

  const positionClasses = {
    bottom: 'bottom-0 left-0 right-0',
    top: 'top-0 left-0 right-0',
    left: 'left-0 top-0 bottom-0',
    right: 'right-0 top-0 bottom-0'
  };

  const gradientDirection = {
    bottom: 'to bottom',
    top: 'to top',
    left: 'to left',
    right: 'to right'
  };

  return (
    <div className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}>
      {blurLayers.map((layer, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            zIndex: layer.zIndex,
            backdropFilter: `blur(${layer.blur})`,
            WebkitBackdropFilter: `blur(${layer.blur})`,
            maskImage: `linear-gradient(${gradientDirection[position]}, rgba(0,0,0,1) ${layer.maskStart}%, rgba(0,0,0,0) ${layer.maskEnd}%)`,
            WebkitMaskImage: `linear-gradient(${gradientDirection[position]}, rgba(0,0,0,1) ${layer.maskStart}%, rgba(0,0,0,0) ${layer.maskEnd}%)`
          }}
        />
      ))}
    </div>
  );
}
