import { DiscoverIcon } from '@/assets/icons';
import { CampaignsIcon } from '@/assets/icons/sidebar/campaigns';
import { ChatIcon } from '@/assets/icons/sidebar/chat';
import { HelpIcon } from '@/assets/icons/sidebar/help';
import { HomeIcon } from '@/assets/icons/sidebar/home';
import { NotificationIcon } from '@/assets/icons/sidebar/notification';
import { SupportIcon } from '@/assets/icons/sidebar/support';
import {
  MoreHorizontal,
  Users,
  BarChart,
  PieChart,
  LineChart,
  ThumbsUp,
  Home,
} from 'lucide-react';

export interface INavItem {
  href: string;
  icon: React.ReactNode;
  alt?: string;
  label: string;
  active?: boolean;
  showBorderBottom?: boolean;
}

interface INav {
  category: string;
  items: INavItem[];
}

export const navItems: INav[] = [
  {
    category: 'Overview',
    items: [
      {
        href: '/home',
        icon: <HomeIcon className="h-6 w-6" />,
        alt: 'Dashboard',
        label: 'Home',
        active: true,
      },
      {
        href: '/home',
        icon: <DiscoverIcon className="h-6 w-6" />,
        alt: 'Users',
        label: 'Discover',
      },
      {
        href: '/home',
        icon: <CampaignsIcon className="h-6 w-6" />,
        alt: 'Reports',
        label: 'Campaigns',
      },
    ],
  },
  {
    category: 'Help ',
    items: [
      {
        href: '/home',
        icon: <HelpIcon className="h-6 w-6" />,
        alt: 'Usage Metrics',
        label: 'Help',
      },
      {
        href: '/home',
        icon: <SupportIcon className="h-6 w-6" />,
        alt: 'Query Categories',
        label: 'Support',
      },
      {
        href: '/home',
        icon: <ChatIcon className="h-6 w-6" />,
        label: 'Chat',
        showBorderBottom: true,
      },
      {
        href: '/home',
        icon: <NotificationIcon className="h-6 w-6" />,
        alt: 'Notification',
        label: 'Notification',
      },
    ],
  },
];

export const queryOptions = [
  {
    label: 'Last 7 Days',
    value: '7d',
  },
  {
    label: 'Last 30 Days',
    value: '30d',
  },
  // {
  //   label: 'Last 3 Months',
  //   value: '3m',
  // },
  // {
  //   label: 'Last 6 Months',
  //   value: '6m',
  // },
  // {
  //   label: 'Last 12 Months',
  //   value: '12m',
  // },
];
