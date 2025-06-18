import { cn } from '@/lib/cn';

export const ExchangeRateIcon = ({
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
        d="M3 21.0002L7.96533 15.7339C8.30007 15.3789 8.84278 15.3789 9.17752 15.7339L12.2511 18.9937C12.5858 19.3487 13.1285 19.3487 13.4632 18.9937L21 11.0002M21 11.0002V16.4547M21 11.0002H15.8571"
        stroke="#328B59"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 7.00015C11 9.20929 9.20914 11.0002 7 11.0002C4.79086 11.0002 3 9.20929 3 7.00015C3 4.79102 4.79086 3.00015 7 3.00015C9.20914 3.00015 11 4.79102 11 7.00015Z"
        stroke="#328B59"
        stroke-width="1.5"
      />
    </svg>
  );
};
