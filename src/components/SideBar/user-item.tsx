'use client';

import { LogOut, MoreHorizontal } from 'lucide-react';
import { Button } from '@/shadcn/button';
import Image from '@/shadcn/image';

interface User {
  firstName?: string;
  email?: string;
  image?: string;
}

interface UserProfileProps {
  user?: User;
  onLogout: () => void;
}

export function UserProfile({ user, onLogout }: UserProfileProps) {
  return (
    <div className="border-t border-gray-600 pt-4">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
            {user?.image ? (
              <Image
                src={user.image || '/placeholder.svg'}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <span className="text-white text-sm font-medium">
                {user?.firstName?.[0] || 'U'}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">
              {user?.firstName || 'John Doe'}
            </span>
            <span className="text-xs" style={{ color: 'var(--sidebar-text)' }}>
              {user?.email || 'john@example.com'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-gray-600"
            onClick={onLogout}
          >
            <LogOut size={16} className="text-red-400" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 hover:bg-gray-600"
          >
            <MoreHorizontal
              size={16}
              style={{ color: 'var(--sidebar-text)' }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
