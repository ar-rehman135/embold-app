import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  Filler,
  type ScriptableContext,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type ChartColor = 'blue' | 'red' | 'green' | 'purple' | 'yellow';

interface ResponsiveLineChartProps {
  color?: ChartColor;
}

export function ResponsiveBlueLineChart({
  color = 'blue',
}: ResponsiveLineChartProps) {
  // Color mapping with gradient variants
  const colorMap = {
    blue: {
        main: '#3b82f6', // lighter blue
        gradientStart: 'rgba(147, 197, 253, 0.3)', // more transparent
        gradientEnd: 'rgba(147, 197, 253, 0)',
        tooltip: '#60a5fa', // lighter tooltip
      },
      red: {
        main: '#ef4444', // light red
        gradientStart: 'rgba(252, 165, 165, 0.3)',
        gradientEnd: 'rgba(252, 165, 165, 0)',
        tooltip: '#f87171', // lighter tooltip
      },
    green: {
      main: '#10b981',
      gradientStart: 'rgba(16, 185, 129, 0.4)',
      gradientEnd: 'rgba(16, 185, 129, 0)',
      tooltip: '#065f46',
    },
    purple: {
      main: '#8b5cf6',
      gradientStart: 'rgba(139, 92, 246, 0.4)',
      gradientEnd: 'rgba(139, 92, 246, 0)',
      tooltip: '#5b21b6',
    },
    yellow: {
      main: '#f59e0b',
      gradientStart: 'rgba(245, 158, 11, 0.4)',
      gradientEnd: 'rgba(245, 158, 11, 0)',
      tooltip: '#92400e',
    },
  };

  const currentColor = colorMap[color];
  const dataPoints = [12, 16, 20, 14, 10];

  // Create gradient with proper typing
  const getGradient = (
    ctx: CanvasRenderingContext2D,
    chartArea: { bottom: number; top: number }
  ) => {
    const gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top
    );
    gradient.addColorStop(0, currentColor.gradientStart);
    gradient.addColorStop(1, currentColor.gradientEnd);
    return gradient;
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Value',
        data: dataPoints,
        borderColor: currentColor.main,
        backgroundColor: (context: ScriptableContext<"line">) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return undefined; // ✅ Use undefined instead of null
            return getGradient(ctx, chartArea);
          },
        borderWidth: 2,
        pointRadius: dataPoints.map((_, index) =>
          index === 0 || index === dataPoints.length - 1 ? 5 : 0
        ),
        pointHoverRadius: dataPoints.map((_, index) =>
          index === 0 || index === dataPoints.length - 1 ? 7 : 0
        ),
        pointBackgroundColor: '#ffffff',
        pointBorderColor: currentColor.main,
        pointBorderWidth: 2,
        tension: 0.3,
        fill: 'origin', // 👈 FIXED: Just use string instead of complex object
      },
    ],
  };
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: currentColor.tooltip,
        bodyFont: { size: 12 },
        padding: 10,
        callbacks: {
          label: (context) =>
            `${context.dataset.label || ''}: ${context.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: false },
        ticks: {
          font: { size: 10 },
          padding: 10,
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 10 },
          padding: 5,
        },
      },
    },
    elements: {
      line: {
        borderJoinStyle: 'round',
        borderCapStyle: 'round',
      },
    },
  };

  return (
    <div className="relative w-full h-full min-h-[200px]">
      <Line data={data} options={options} className="w-full h-full" />
    </div>
  );
}
