import type React from 'react';
interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  color?: string;
  icon?: React.ReactNode;
}

export function MetricCard({
  title,
  value,
  subtitle,
  color = 'var(--chart-blue)',
  icon,
}: MetricCardProps) {
  return (
    <div className="metric-card flex flex-col " >
      <div className="text-center flex flex-col items-center  gap-3">
        {icon && <div style={{ color }}>{icon}</div>}
        <h3
          className="text-sm font-medium"
          style={{ color: title === 'Engagement Rate' ? 'rgba(50, 139, 89, 1)' : 'rgba(37, 99, 235, 1)' }}
        >
          {title}
        </h3>
      </div>
      <div className="space-y-1 text-center">
        <div
          className="text-2xl font-bold text-center"
          style={{ color: title === 'Engagement Rate' ? 'rgba(50, 139, 89, 1)' : 'rgba(37, 99, 235, 1)' }}
        >
          {value}
        </div>
        {subtitle && (
          <div
            className="text-sm text-center"
            style={{ color: title === 'Engagement Rate' ? 'rgba(50, 139, 89, 1)' : 'rgba(37, 99, 235, 1)' }}
          >
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
}
