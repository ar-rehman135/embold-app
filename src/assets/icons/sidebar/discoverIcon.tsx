import { cn } from '@/lib/cn';

export const DiscoverIcon = ({
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
      <path
        d="M12 3.00021C7.02944 3.00021 3 7.02965 3 12.0002C3 16.9708 7.02944 21.0002 12 21.0002C16.9706 21.0002 21 16.9708 21 12.0002C21 7.97034 18.3514 4.55907 14.7 3.41224"
        stroke="#ACB3B9"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.5356 8.31295L10.6773 10.3682C10.5367 10.4431 10.4216 10.5583 10.3469 10.699L8.24365 14.6588C7.87199 15.3585 8.63453 16.1148 9.33119 15.7375L12.955 13.7746C13.085 13.7042 13.193 13.5991 13.2669 13.471L15.6047 9.4188C16.0064 8.72241 15.2452 7.93497 14.5356 8.31295Z"
        stroke="#ACB3B9"
        stroke-width="1.5"
      />
    </svg>
  );
};
