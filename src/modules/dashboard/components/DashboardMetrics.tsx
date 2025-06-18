import { ExternalLink } from 'lucide-react';

import { MetricCard } from '@/components/cards/MetricCard';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/shadcn/select';
import Instagram from '@/assets/images/svgs/instagram.svg';
import Image from 'next/image';
import { ExchangeRateIcon } from '@/assets/icons/exchangeRate';
import { FolowersIcon } from '@/assets/icons/followers';
import { CommentsIcon } from '@/assets/icons/comments';
import { AvgLikesIcon } from '@/assets/icons/avgLikes';

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-12 mb-8  ">
      <div className="col-span-12 md:col-span-4 flex md:block items-center justify-between mt-4 ">
        <div className="mb-4">
          <Select onValueChange={() => {}} value={''}>
            <SelectTrigger className="bg-white w-90 rounded-3xl">
              <SelectValue
                placeholder={
                  <div className="flex items-center gap-2">
                    <Image
                      src={Instagram}
                      height={15}
                      width={15}
                      alt="Profile"
                    />
                    loveablelyns
                  </div>
                }
                className="text-primary"
              ></SelectValue>
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-slate-600">Go to Profile</span>
          <ExternalLink className="h-4 w-4 text-slate-400" />
        </div>
      </div>
      <div className="grid grid-cols-12 md:flex items-center   flex-wrap col-span-12 justify-end md:col-span-8 w-full mt-4 md:mt-0 gap-4 ">
        <div className="col-span-6 bg-gray-100 md:bg-white rounded-md py-6">
          <MetricCard
            icon={<ExchangeRateIcon className="h-15 w-15 text-emerald-500" />}
            title="Engagement Rate"
            value="17.99%"
          />
        </div>
        <div className="col-span-6 bg-gray-100 md:bg-white rounded-md py-6">
          <MetricCard
            icon={<FolowersIcon className="h-15 w-15 text-blue-500" />}
            title="Followers"
            value="30.62K"
          />
        </div>
        <div className="col-span-6 bg-gray-100 md:bg-white rounded-md py-6">
          <MetricCard
            icon={<CommentsIcon className="h-15 w-15 text-purple-500" />}
            title="Avg Comments"
            value="100K"
          />
        </div>
        <div className="col-span-6 bg-gray-100 md:bg-white rounded-md py-6">
          <MetricCard
            icon={<AvgLikesIcon className="h-15 w-15 text-rose-500" />}
            title="Avg Likes"
            value="25.43K"
          />
        </div>
      </div>
    </div>
  );
}
