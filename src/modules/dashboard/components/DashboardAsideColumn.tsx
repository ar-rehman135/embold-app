import { Separator } from '@/shadcn/seperator';
import React from 'react';
import DashboardProfileData from './DashboardAsideColumn/DashboardProfileData';
import ProfileTags from './DashboardAsideColumn/ProfileTags';
import Rooster from '@/assets/images/svgs/rooster.svg';
import Image from 'next/image';

const DashboardAsideColumn = () => {
  return (
    <aside className="w-full xl:w-80 bg-white lg:border-l border-slate-200 p-4 lg:p-6">
      <div className="space-y-6">
        {/* Profile Stats */}
        <div className="space-y-3 hidden md:block">
          <DashboardProfileData />
        </div>

        <Separator className="bg-slate-200" />
        {/* <div className='hidden md:block '> */}
        {/* Suggested Compensation */}
        <div className="space-y-3 hidden md:block">
          <h3 className="font-semibold text-slate-900">
            Suggested Compensation
          </h3>
          <div className="space-y-2">
            <p className="text-[#2563eb] text-[15px]"> $1,478.56 / Per Post</p>
            <p className="text-[#2563eb] text-[15px]"> $1,478.56 / Per Post</p>
          </div>
        </div>

        <Separator className="bg-slate-200 hidden md:block" />

        {/* Asking Compensation */}
        <div className="space-y-3 hidden md:block">
          <h3 className="font-semibold text-slate-900">Asking Compensation</h3>
          <div className="space-y-2">
            <p className="text-[#2563eb] text-[15px]">
              {' '}
              $300 - $1000 / Per Post
            </p>
            <p className="text-[#2563eb] text-[15px]">
              {' '}
              $100 - $500 / Per Story
            </p>
          </div>
        </div>

        <Separator className="bg-slate-200 hidden md:block" />

        {/* Profile Tags */}
        <div className="space-y-3 hidden md:block">
          <h3 className="font-semibold text-slate-900">Profile Tags</h3>
          <ProfileTags />
        </div>

        <Separator className="bg-slate-200 hidden md:block" />

        {/* My Rosters */}
        <div className="space-y-3 hidden md:block">
          <h3 className="font-semibold text-slate-900">My Rosters</h3>
          <div className="flex items-center gap-3">
            <Image src={Rooster} height={30} width={30} alt="rooster" />
            <span className="text-sm text-slate-700">Coca-Cola</span>
          </div>
        </div>
      </div>
      {/* </div> */}
    </aside>
  );
};

export default DashboardAsideColumn;
