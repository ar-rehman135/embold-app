import type React from 'react';
import {
  Home,
  Compass,
  Megaphone,
  HelpCircle,
  HeadphonesIcon,
  MessageCircle,
  Bell,
  Instagram,
  Youtube,
} from 'lucide-react';

export interface NavItem {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

export interface NavCategory {
  category: string;
  items: NavItem[];
}

export const navItems: NavCategory[] = [
  {
    category: 'Main',
    items: [
      {
        href: '/',
        icon: <Home size={20} />,
        label: 'Home',
        active: true,
      },
      {
        href: '/discover',
        icon: <Compass size={20} />,
        label: 'Discover',
      },
      {
        href: '/campaigns',
        icon: <Megaphone size={20} />,
        label: 'Campaigns',
      },
    ],
  },
  {
    category: 'Support',
    items: [
      {
        href: '/help',
        icon: <HelpCircle size={20} />,
        label: 'Help',
      },
      {
        href: '/support',
        icon: <HeadphonesIcon size={20} />,
        label: 'Support',
      },
      {
        href: '/chat',
        icon: <MessageCircle size={20} />,
        label: 'Chat',
      },
      {
        href: '/notifications',
        icon: <Bell size={20} />,
        label: 'Notification',
      },
    ],
  },
];

export const socialAccounts = [
  {
    platform: 'Instagram',
    icon: <Instagram size={16} />,
    status: 'NEW',
    connected: true,
  },
  {
    platform: 'TikTok',
    icon: (
      <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">
        T
      </div>
    ),
    status: '',
    connected: true,
  },
  {
    platform: 'YouTube',
    icon: <Youtube size={16} />,
    status: 'COMING',
    connected: false,
  },
];
