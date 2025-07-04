import { cn } from '@/lib/cn';

export const AvgLikesIcon = ({
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
        d="M8 2.75015C9.79493 2.75015 11.25 4.20523 11.25 6.00015C11.25 7.79508 9.79493 9.25015 8 9.25015C6.20507 9.25015 4.75 7.79508 4.75 6.00015C4.75 4.20523 6.20507 2.75015 8 2.75015Z"
        stroke="#2563EB"
        stroke-width="1.5"
      />
      <path
        d="M3 17.0002C3 14.2387 5.23858 12.0002 8 12.0002V12.0002C10.7614 12.0002 13 14.2387 13 17.0002V19.5002C13 20.3286 12.3284 21.0002 11.5 21.0002H4.5C3.67157 21.0002 3 20.3286 3 19.5002V17.0002Z"
        stroke="#2563EB"
        stroke-width="1.5"
      />
      <path
        d="M15.7612 8.27631C16.5657 7.81938 17.2679 8.00352 17.6897 8.29682C17.8627 8.41709 17.9491 8.47721 18 8.47721C18.0509 8.47721 18.1373 8.41709 18.3103 8.29682C18.7321 8.00352 19.4343 7.81938 20.2388 8.27631C21.2946 8.87597 21.5335 10.8543 19.0981 12.5233C18.6343 12.8412 18.4024 13.0002 18 13.0002C17.5976 13.0002 17.3657 12.8412 16.9019 12.5233C14.4665 10.8543 14.7054 8.87597 15.7612 8.27631Z"
        stroke="#2563EB"
        stroke-width="1.5"
      />
    </svg>
  );
};
