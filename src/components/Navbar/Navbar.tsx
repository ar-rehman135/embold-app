'use client';
import { useState } from 'react';

import { ILayoutProps } from '@/types';
import { cn } from '@/lib/cn';

import LeftNavbar from './Components/LeftNavBar';
import { MobileHeader } from './Components/MobileHeader';
import { useRouter } from 'next/navigation';

interface INavbar extends ILayoutProps {}

export function Navbar({ children, title }: INavbar) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('7d');

  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <>
      <div className="hidden h-screen md:flex overflow-hidden">
        <LeftNavbar open={open} setOpen={setOpen} />
        <div
          className="flex-col relative flex-1"
          style={{ marginLeft: '280px' }}
        >
          <div
            className={cn('mt-7 overflow-auto px-2 md:px-6')}
            style={{ height: 'calc(100vh - 20px)' }}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="block md:hidden absolute top-0 z-50">
        {open && <LeftNavbar open={open} setOpen={setOpen} isMobile={true} />}
      </div>
      <div className="block md:hidden relative">
        <MobileHeader
          title={title}
          selected={selected}
          setOpen={setOpen}
          open={open}
        />
        {/* <MobileNavigation /> */}

        <div className={cn('mt-[100px] overflow-auto  px-2 md:px-6')}>
          {children}
        </div>
      </div>
    </>
  );
}
