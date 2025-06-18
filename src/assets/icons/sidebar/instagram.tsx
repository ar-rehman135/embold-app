import { cn } from '@/lib/cn';

export const InstagramIcon = ({
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
        d="M2.08333 10.0002C2.08333 6.26827 2.08333 4.4023 3.2427 3.24292C4.40207 2.08356 6.26805 2.08356 10 2.08356C13.7319 2.08356 15.5979 2.08356 16.7573 3.24292C17.9167 4.4023 17.9167 6.26827 17.9167 10.0002C17.9167 13.7321 17.9167 15.5981 16.7573 16.7576C15.5979 17.9169 13.7319 17.9169 10 17.9169C6.26805 17.9169 4.40207 17.9169 3.2427 16.7576C2.08333 15.5981 2.08333 13.7321 2.08333 10.0002Z"
        stroke="#ACB3B9"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M13.75 10.0002C13.75 12.0713 12.0711 13.7502 10 13.7502C7.92893 13.7502 6.25 12.0713 6.25 10.0002C6.25 7.92918 7.92893 6.25024 10 6.25024C12.0711 6.25024 13.75 7.92918 13.75 10.0002Z"
        stroke="#ACB3B9"
        stroke-width="1.5"
      />
      <path
        d="M14.5898 5.41693H14.5823"
        stroke="#151719"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
