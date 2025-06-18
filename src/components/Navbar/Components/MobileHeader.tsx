'use client';
import {
  CalendarIcon,
  LogOutIcon,
  Menu,
  MenuIcon,
  MoveLeft,
  SearchIcon,
} from 'lucide-react';

import Image from '@/shadcn/image';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shadcn/select';

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shadcn/dropdown-menu';
import { DropdownMenu } from '@/shadcn/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/shadcn/avatar';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { getAuthDataSelector } from '@/store/selectors';
import { userLoggedOut } from '@/store/features/auth/authSlice';
import { InputWithIcon } from '@/shadcn/input-with-icon';
import { IHeaderProps } from '@/types';
import { queryOptions } from '../items';
import { useRouter } from 'next/navigation';

export function MobileHeader({
  onSearch,
  handleSelectChange,
  selected,
  setOpen,
  open,
}: IHeaderProps) {
  const { user } = useAppSelector(getAuthDataSelector);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(userLoggedOut());
    router.push('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex flex-col justify-between items-center p-3  bg-background px-8">
      <div className="w-full flex justify-between my-6">
        <div className="flex items-center gap-2">
          <MoveLeft />
          <p>Profile</p>
        </div>
        <div className="flex items-center gap-2" onClick={() => setOpen(!open)}>
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
