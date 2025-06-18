'use client';

import AppLayout from '@/layouts/AppLayout';

import { DashboardHeader } from './components/DashboardHeader';
import { DashboardMetrics } from './components/DashboardMetrics';

import { DashboardProfileBio } from './components/DashboardProfileBio';
import DashboardTabs from './components/DashboardTabs';
import DashboardAsideColumn from './components/DashboardAsideColumn';
import DashboardProfileData from './components/DashboardAsideColumn/DashboardProfileData';
import { Separator } from '@/shadcn/seperator';

export function Dashboard() {
  return (
    <AppLayout title="Dashboard">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full px-6">
          <DashboardHeader />
          <div className="space-y-3 block md:hidden">
            <DashboardProfileData />
          </div>
          <DashboardProfileBio />
          <Separator className="bg-slate-200 hidden md:block mb-3" />

          <DashboardMetrics />
          <div className="block lg:hidden">
            <DashboardAsideColumn />
          </div>
          <div className="flex justify-between items-center mb-6">
            <DashboardTabs />
          </div>
        </div>
        <div className="hidden lg:block">
          <DashboardAsideColumn />
        </div>
      </div>
    </AppLayout>
  );
}
