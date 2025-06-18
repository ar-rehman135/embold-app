'use client';

import {
  Home,
  Compass,
  Megaphone,
  HelpCircle,
  Headphones,
  MessageCircle,
  Bell,
  Instagram,
  Youtube,
  MoreHorizontal,
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Compass, label: 'Discover', active: false },
    { icon: Megaphone, label: 'Campaigns', active: false },
    { icon: HelpCircle, label: 'Help', active: false },
    { icon: Headphones, label: 'Support', active: false },
    { icon: MessageCircle, label: 'Chat', active: false },
    { icon: Bell, label: 'Notification', active: false },
  ];

  const socialAccounts = [
    { icon: Instagram, label: 'Instagram', badge: 'NEW', color: '#E4405F' },
    {
      icon: () => (
        <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center text-white text-xs font-bold">
          T
        </div>
      ),
      label: 'TikTok',
      badge: 'NEW',
      color: '#000000',
    },
    { icon: Youtube, label: 'YouTube', badge: 'COMING', color: '#FF0000' },
  ];

  return (
    <div
      className="fixed left-0 top-0 h-full w-[213px] z-50 flex flex-col"
      style={{ backgroundColor: 'var(--sidebar-bg)' }}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center transform rotate-45">
            <div className="w-3 h-3 bg-white rounded-sm transform -rotate-45"></div>
          </div>
          <div>
            <div className="text-white font-semibold text-lg">embold</div>
            <div className="text-xs" style={{ color: 'var(--sidebar-text)' }}>
              Influencers
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-6">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`sidebar-item ${item.active ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Social Accounts */}
        <div className="mt-8">
          <div className="px-4 mb-4">
            <h3
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--sidebar-text)' }}
            >
              Social Accounts
            </h3>
          </div>
          <div className="space-y-1 px-3">
            {socialAccounts.map((account) => {
              const Icon = account.icon;
              return (
                <div
                  key={account.label}
                  className="flex items-center justify-between py-2 px-3"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} />
                    <span
                      className="text-sm"
                      style={{ color: 'var(--sidebar-text)' }}
                    >
                      {account.label}
                    </span>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      account.badge === 'NEW'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-500 text-white'
                    }`}
                  >
                    {account.badge}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-white text-sm font-medium">J</span>
            </div>
            <div>
              <div className="text-white text-sm font-medium">John Doe</div>
            </div>
          </div>
          <MoreHorizontal size={16} style={{ color: 'var(--sidebar-text)' }} />
        </div>
      </div>
    </div>
  );
}
