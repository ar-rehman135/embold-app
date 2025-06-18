import { cn } from '@/lib/cn';

export const TrendIcon = ({
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
        d="M2.5 17.5L6.63778 13.1114C6.91673 12.8156 7.36899 12.8156 7.64794 13.1114L10.2092 15.8279C10.4881 16.1238 10.9404 16.1238 11.2194 15.8279L17.5 9.16666M17.5 9.16666V13.7121M17.5 9.16666H13.2143"
        stroke="#151719"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.16667 5.83333C9.16667 7.67428 7.67428 9.16667 5.83333 9.16667C3.99239 9.16667 2.5 7.67428 2.5 5.83333C2.5 3.99239 3.99239 2.5 5.83333 2.5C7.67428 2.5 9.16667 3.99239 9.16667 5.83333Z"
        stroke="#151719"
        stroke-width="1.5"
      />
    </svg>
  );
};
