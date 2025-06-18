import { cn } from '@/lib/cn';

export const HelpIcon = ({
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
        d="M12 22.0002C17.5229 22.0002 22 17.5231 22 12.0002C22 6.47737 17.5229 2.00021 12 2.00021C6.47716 2.00021 2.00001 6.47737 2.00001 12.0002C2.00001 17.5231 6.47716 22.0002 12 22.0002Z"
        stroke="#ACB3B9"
        stroke-width="1.5"
      />
      <path
        d="M12 16.0002C14.2091 16.0002 16 14.2094 16 12.0002C16 9.79107 14.2091 8.00021 12 8.00021C9.79087 8.00021 8.00001 9.79107 8.00001 12.0002C8.00001 14.2094 9.79087 16.0002 12 16.0002Z"
        stroke="#ACB3B9"
        stroke-width="1.5"
      />
      <path d="M15 9.00021L19 5.00021" stroke="#ACB3B9" stroke-width="1.5" />
      <path
        d="M5.00001 19.0002L9.00001 15.0002"
        stroke="#ACB3B9"
        stroke-width="1.5"
      />
      <path
        d="M9.00001 9.00021L5.00001 5.00021"
        stroke="#ACB3B9"
        stroke-width="1.5"
      />
      <path d="M19 19.0002L15 15.0002" stroke="#ACB3B9" stroke-width="1.5" />
    </svg>
  );
};
