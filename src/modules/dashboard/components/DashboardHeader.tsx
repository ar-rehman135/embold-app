import DummyProfile from '@/assets/images/svgs/sampleProfile.svg';
import RatingStar from '@/assets/images/svgs/Star.svg';
import Edit from '@/assets/images/svgs/edit.svg';

import { Button } from '@/shadcn/button';
import { MoveLeft} from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/shadcn/badge';
import { Separator } from '@/shadcn/seperator';
export function DashboardHeader() {
  return (
    <>
      <Badge variant="secondary" className="p-2 text-sm mb-4 hidden md:flex">
        <MoveLeft /> Back
      </Badge>
      <div className="mb-3 flex items-center justify-between flex-wrap gap-4 bg-gray-100 md:bg-white p-4">
        <div className="flex items-center gap-2 sm:gap-6">
          <Image src={DummyProfile} height={80} width={80} alt="Profile" />
          <div>
            <h1 className=" text-xl sm:text-2xl font-semibold text-primary">
              Terrance Hail
            </h1>
            <p className=" text-sm sm:text-md text-gray-500">
              terrance@gmail.com
            </p>
            <div className="flex items-center gap-2">
              <Image src={RatingStar} height={23} width={23} alt="Rating" />
              <p className="text-xl sm:text-2xl text-primary">4.9</p>

              <p className="text-xs sm:text-sm text-gray-500">(57 reviews)</p>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          // asChild
          className="border-primary text-primary hover:bg-green-50 text-black gap-2 rounded-3xl"
        >
          <>
            <Image src={Edit} height={18} width={18} alt="edit" />
            Enhance profile
          </>
        </Button>
      </div>
      <Separator className="bg-slate-200 hidden md:block mb-3" />

    </>
  );
}
