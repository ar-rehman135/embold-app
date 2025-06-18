import { cn } from '@/lib/cn';

export const ChatIcon = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"     className={cn('h-4 w-4', className)}
      {...props}>
<circle cx="7" cy="6.00024" r="3.25" stroke="#ACB3B9" stroke-width="1.5"/>
<path d="M2 17.0002C2 14.2388 4.23858 12.0002 7 12.0002V12.0002C9.76142 12.0002 12 14.2388 12 17.0002V19.5002C12 20.3287 11.3284 21.0002 10.5 21.0002H3.5C2.67157 21.0002 2 20.3287 2 19.5002V17.0002Z" stroke="#ACB3B9" stroke-width="1.5"/>
<path d="M13 11.8449V4.50024C13 4.2241 13.2239 4.00024 13.5 4.00024H21.5C21.7761 4.00024 22 4.2241 22 4.50024V9.90934C22 10.1855 21.7761 10.4093 21.5 10.4093H16.6083C16.5369 10.4093 16.4664 10.4246 16.4014 10.4542L13.1414 11.936C13.0752 11.9661 13 11.9177 13 11.8449Z" stroke="#ACB3B9" stroke-width="1.5"/>
</svg>

  );
};
