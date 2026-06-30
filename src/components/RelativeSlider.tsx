'use client';

import { useRef } from 'react';

type RelativeSliderProps = {
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  label: string;
};

export function RelativeSlider({
  value,
  min,
  max,
  step = 1,
  onChange,
  label
}: RelativeSliderProps) {
  const start = useRef<{ x: number; value: number } | null>(null);
  const clamp = (nextValue: number) => {
    const stepped = Math.round((nextValue - min) / step) * step + min;
    return Math.min(max, Math.max(min, Number(stepped.toFixed(6))));
  };

  return (
    <div className="sliderWithValue">
      <input
        aria-label={label}
        className="relativeSlider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={() => {}}
        onPointerDown={(event) => {
          event.preventDefault();
          event.currentTarget.focus();
          start.current = { x: event.clientX, value };
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!start.current) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (rect.width <= 0) return;
          const delta = ((event.clientX - start.current.x) / rect.width) * (max - min);
          onChange(clamp(start.current.value + delta));
        }}
        onPointerUp={(event) => {
          start.current = null;
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
          }
        }}
        onPointerCancel={() => {
          start.current = null;
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
            event.preventDefault();
            onChange(clamp(value - step));
          }
          if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
            event.preventDefault();
            onChange(clamp(value + step));
          }
        }}
      />
      <input
        aria-label={`${label} value`}
        className="numberSmall"
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(clamp(Number(event.target.value)))}
      />
    </div>
  );
}
