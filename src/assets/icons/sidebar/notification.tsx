import { cn } from '@/lib/cn';

export const NotificationIcon = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <g clip-path="url(#clip0_8815_498)">
        <path
          d="M6 10.0002C6 6.68654 8.68629 4.00024 12 4.00024V4.00024C15.3137 4.00024 18 6.68654 18 10.0002V18.0002H6V10.0002Z"
          stroke="#ACB3B9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 18.0002H20"
          stroke="#ACB3B9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 21.0002H14"
          stroke="#ACB3B9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_8815_498">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.000244141)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
