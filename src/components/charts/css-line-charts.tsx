'use client';

interface CSSLineChartProps {
  title: string;
  data: number[];
  labels: string[];
  color: string;
}

export function CSSLineChart({
  title,
  data,
  labels,
  color,
}: CSSLineChartProps) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;

  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * 100;
    const y = 100 - ((value - minValue) / range) * 100;
    return { x, y, value };
  });

  const pathData = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');

  return (
    <div className="chart-container">
      <h3
        className="text-lg font-semibold mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h3>
      <div className="h-64 relative">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          {[0, 25, 50, 75, 100].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="#e2e8f0"
              strokeWidth="0.5"
            />
          ))}

          {/* Area fill */}
          <path d={`${pathData} L 100 100 L 0 100 Z`} fill={`${color}20`} />

          {/* Line */}
          <path
            d={pathData}
            fill="none"
            stroke={color}
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />

          {/* Points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="3"
              fill={color}
              stroke="#ffffff"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 mt-2">
          {labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
