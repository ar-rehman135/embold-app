'use client';
import { useRouter } from 'next/navigation';

import type React from 'react';
import Link from 'next/link';
import Image from '@/shadcn/image';
import { navItems } from '../items';
import { cn } from '@/lib/cn';
import { CircleX } from 'lucide-react';

import { Button } from '@/shadcn/button';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getAuthDataSelector } from '@/store/selectors';
import { userLoggedOut } from '@/store/features/auth/authSlice';
import Logo from '@/assets/images/svgs/Logo.svg';
import CollapseIcon from '@/assets/images/svgs/Collapse.svg';
import { SocialItem } from './SocialItems';
import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn/avatar';
import User from '@/assets/images/svgs/Users.svg';
import Menu from '@/assets/images/svgs/Context-menu.svg';

interface LeftNavbarProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  isMobile?: boolean;
}

const LeftNavbar = ({ open, isMobile, setOpen }: LeftNavbarProps) => {
  const { user } = useAppSelector(getAuthDataSelector);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = (): void => {
    dispatch(userLoggedOut());
    router.push('/login');
  };

  return (
    <div
      className={cn(
        'fixed bg-background w-[280px] px-5 z-30 transition-all duration-300 flex-none border-r-2 border-border bg-[#051333] m-2 rounded-xl  ',
        open && 'w-full'
      )}
      style={{
        minHeight: 'calc(100dvh - 15px)',
        maxHeight: 'calc(100dvh - 15px)',
        overflow: 'auto',
      }}
    >
      <div className="flex items-start justify-between py-6 ">
        <Image
          src={Logo}
          alt="Embold Logo"
          width={180}
          height={70}
          style={{ marginLeft: -10 }}
        />
        {isMobile ? (
          <div onClick={() => setOpen(false)}>
            <CircleX color="white" />
          </div>
        ) : (
          <Image
            src={CollapseIcon}
            alt="CollapseIcon"
            width={20}
            height={20}
            style={{ marginLeft: -10 }}
          />
        )}
      </div>
      <div className="h-full w-full overflow-hidden ">
        <div className="flex flex-col gap-2 flex-1">
          {navItems.map(({ category, items }) => (
            <div className="flex flex-col gap-2" key={category}>
              <div className="text-sm text-primary font-bold items-start ">
                {category}
              </div>
              {items.map(({ href, icon, label, active }) => (
                <NavItem
                  key={label}
                  href={href}
                  icon={icon}
                  label={label}
                  active={active}
                />
              ))}
              {/* <div className="h-[0.5px] w-full bg-border" /> */}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-3 mt-8">
        <div className="text-slate-400 text-xs uppercase tracking-wider font-medium">
          Social Accounts
        </div>
        <SocialItem platform="Instagram" status="Linked" />
        <SocialItem platform="TikTok" status="Linked" />
        <SocialItem platform="YouTube" status="Not-Linked" />
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-800 w-[260px] py-4 flex flex-row custom-logout-container fixed bottom-5 bg-[rgba(9, 9, 16, 0.12)]">
        <div
          className="flex items-center gap-3 justify-between w-full 
                  bg-[rgba(9,9,16,0.12)] backdrop-blur-md rounded-full px-3 py-2"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback className="bg-white text-white text-xs">
              <Image src={User} height={20} width={20} alt="user" />
            </AvatarFallback>
          </Avatar>
          <span className="text-white text-sm font-medium">John Doe</span>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto text-slate-400 h-8 w-8 p-0"
          >
            <Image src={Menu} height={20} width={20} alt="menu" />
          </Button>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  showBorderBottom?: boolean;
}

function NavItem({ href, icon, label, active }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`navbar-custom flex p-1 rounded-lg items-center gap-1 w-full px-2 ${active ? 'bg-primary text-primary-foreground' : 'text-[#ACB3B9] '}`}
    >
      <div className={`p-2 rounded-full `}>{icon}</div>
      <span
        className={`text-sm font-bold text-center nav-item ${active ? '!text-white' : ''} `}
      >
        {label}
      </span>
    </Link>
  );
}

export default LeftNavbar;
