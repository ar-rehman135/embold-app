import { cn } from '@/lib/cn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shadcn/tabs';
import React from 'react';
import DashboardAnalytics from './tabs/Analytics';

const DashboardTabs = () => {
  return (
    <Tabs defaultValue="analytics" className="w-full ">
      <TabsList className="grid  grid-cols-3 bg-white relative w-full max-w-[400px] ">
        {/* Content Tab */}
        <TabsTrigger
          value="content"
          className={cn(
            'relative pb-4 data-[state=active]:text-[#1362E1] transition-colors',
            'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5',
            'after:bg-transparent after:transition-all',
            'data-[state=active]:after:bg-[#1362E1] text-wrap'
          )}
        >
          Content
        </TabsTrigger>

        {/* Analytics Tab */}
        <TabsTrigger
          value="analytics"
          className={cn(
            'relative pb-4 data-[state=active]:text-[#1362E1] transition-colors',
            'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5',
            'after:bg-transparent after:transition-all',
            'data-[state=active]:after:bg-[#1362E1]   '
          )}
        >
          Analytics
        </TabsTrigger>

        {/* Past Campaigns Tab */}
        <TabsTrigger
          value="campaigns"
          className={cn(
            'relative pb-4 data-[state=active]:text-[#1362E1] transition-colors',
            'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5',
            'after:bg-transparent after:transition-all',
            'data-[state=active]:after:bg-[#1362E1] max-[370px]:text-wrap '
          )}
        >
          Past Campaigns
        </TabsTrigger>
      </TabsList>

      <TabsContent value="analytics" className="mt-[50px] space-y-6">
        <DashboardAnalytics />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;
