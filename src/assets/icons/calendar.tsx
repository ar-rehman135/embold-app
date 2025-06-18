import { cn } from '@/lib/cn';

export const CalendarIcon = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path
        d="M15 1.66667V3.33334M5 1.66667V3.33334"
        stroke="#151719"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.08337 10.2027C2.08337 6.57162 2.08337 4.75607 3.12681 3.62803C4.17024 2.5 5.84962 2.5 9.20837 2.5H10.7917C14.1505 2.5 15.8299 2.5 16.8733 3.62803C17.9167 4.75607 17.9167 6.57162 17.9167 10.2027V10.6307C17.9167 14.2618 17.9167 16.0773 16.8733 17.2053C15.8299 18.3333 14.1505 18.3333 10.7917 18.3333H9.20837C5.84962 18.3333 4.17024 18.3333 3.12681 17.2053C2.08337 16.0773 2.08337 14.2618 2.08337 10.6307V10.2027Z"
        stroke="#151719"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.5 6.66667L17.5 6.66667"
        stroke="#151719"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="12.5"
        y="12.5"
        width="3.33333"
        height="3.33333"
        rx="1"
        fill="#151719"
      />
    </svg>
  );
};
