'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  title: string;
  data: number[];
  labels: string[];
  color: string;
  fillColor?: string;
}

export function LineChart({
  title,
  data,
  labels,
  color,
  fillColor,
}: LineChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    chartInstance.current = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: title,
            data,
            borderColor: color,
            backgroundColor: fillColor || `${color}20`,
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: color,
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: color,
            borderWidth: 1,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#64748b',
              font: {
                size: 12,
              },
            },
          },
          y: {
            grid: {
              color: '#e2e8f0',
            },
            ticks: {
              color: '#64748b',
              font: {
                size: 12,
              },
              callback: (value) => {
                if (typeof value === 'number') {
                  return value >= 1000
                    ? `${(value / 1000).toFixed(0)}K`
                    : value.toString();
                }
                return value;
              },
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'index' as const,
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels, color, fillColor, title]);

  return (
    <div className="chart-container">
      <h3
        className="text-lg font-semibold mb-4"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h3>
      <div className="h-64">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
