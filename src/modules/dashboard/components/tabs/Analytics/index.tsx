import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shadcn/tabs';
import React from 'react';
import InfluencerData from './tabs/InfluencerData';

const DashboardAnalytics = () => {
  return (
    <Tabs defaultValue="influencer-data" className="w-full">
      <TabsList className="bg-gray-100 p-1 h-auto flex flex-wrap gap-1 w-full rounded-3xl">
        <TabsTrigger
          value="influencer-data"
          className="text-sm px-3 py-4 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:rounded-3xl flex-1 min-w-[120px]"
        >
          Influencer Data
        </TabsTrigger>
        <TabsTrigger
          value="query-categories"
          className="text-sm px-3 py-4 data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-none data-[state=active]:rounded-3xl flex-1 min-w-[120px]"
        >
          Audience Data
        </TabsTrigger>
      </TabsList>
      <TabsContent value="influencer-data" className="mt-[50px] space-y-6">
        <InfluencerData />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardAnalytics;
