import { cn } from '@/lib/cn';

export const HomeIcon = ({
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
        d="M21 9.00026L13.1094 3.73982C12.4376 3.29195 11.5624 3.29195 10.8906 3.73982L3.89059 8.40652C3.3342 8.77746 3 9.40192 3 10.0706V19.0002C3 20.1048 3.89543 21.0002 5 21.0002H20C20.5523 21.0002 21 20.5525 21 20.0002V18.0002"
        stroke="#ACB3B9"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 17.0002C15 15.3434 16.3431 14.0002 18 14.0002V14.0002C19.6569 14.0002 21 15.3434 21 17.0002V20.5627C21 20.8043 20.8041 21.0002 20.5625 21.0002H15.4375C15.1959 21.0002 15 20.8043 15 20.5627V17.0002Z"
        stroke="#ACB3B9"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};
