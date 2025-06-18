import { cn } from '@/lib/cn';

export const SupportIcon = ({
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
        d="M21 12.0002H19C17.8954 12.0002 17 12.8957 17 14.0002V16.0002C17 17.1048 17.8954 18.0002 19 18.0002C20.1046 18.0002 21 17.1048 21 16.0002V12.0002ZM21 12.0002C21 7.02968 16.9706 3.00024 12 3.00024C7.02944 3.00024 3 7.02968 3 12.0002M3 12.0002V16.0002C3 17.1048 3.89543 18.0002 5 18.0002C6.10457 18.0002 7 17.1048 7 16.0002V14.0002C7 12.8957 6.10457 12.0002 5 12.0002H3Z"
        stroke="#ACB3B9"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 14.0002V18.0002C21 20.0002 20.3333 21.0002 19 21.0002C17.6667 21.0002 16 21.0002 14 21.0002"
        stroke="#ACB3B9"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
