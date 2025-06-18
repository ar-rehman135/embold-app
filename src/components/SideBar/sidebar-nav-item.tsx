'use client';

import type React from 'react';

import Link from 'next/link';
import { cn } from '@/lib/cn';

interface SidebarNavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export function SidebarNavItem({
  href,
  icon,
  label,
  active,
}: SidebarNavItemProps) {
  return (
    <Link href={href} className={cn('sidebar-nav-item', active && 'active')}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}
