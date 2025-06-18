// Parent Component (InfluencerData.tsx)
import { Card } from '@/shadcn/card';
import React from 'react';
import { ResponsiveBlueLineChart } from './Chart';

const InfluencerData = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl2:grid-cols-4 gap-4 w-full">
      <Card className="border border-gray-300 rounded-xl p-4">
        <p className="font-medium mb-2">Followers</p>
        <div className="h-[200px] sm:h-[250px]">
          <ResponsiveBlueLineChart color={"blue"} />
        </div>
      </Card>
      <Card className="border border-gray-300 rounded-xl p-4">
        <p className="font-medium mb-2">Following</p>
        <div className="h-[200px] sm:h-[250px]">
          <ResponsiveBlueLineChart color={"red"} />
        </div>
      </Card>
      <Card className="border border-gray-300 rounded-xl p-4">
        <p className="font-medium mb-2">Likes</p>
        <div className="h-[200px] sm:h-[250px]">
          <ResponsiveBlueLineChart color={"blue"} />
        </div>
      </Card>
    </div>
  );
};

export default InfluencerData;