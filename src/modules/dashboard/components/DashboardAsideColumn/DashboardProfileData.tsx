import { CalendarIcon, ContentIcon, LocationIcon, TrendIcon } from '@/assets/icons';
import React from 'react'
const infoItems = [
    {
      id: 1,
      title: 'Location',
      value: 'Calgary, Alberta',
      icon: <LocationIcon className="text-gray-500" />,
    },
    {
      id: 2,
      title: 'Creation Date',
      value: 'Apr 28, 2024',
      icon: <CalendarIcon className="text-gray-500" />,
    },
    {
      id: 3,
      title: 'Type of content',
      value: 'Lifestyle',
      icon: <ContentIcon className="text-purple-500" />,
    },
    {
      id: 4,
      title: 'Avg Response Rate',
      value: '31.82%',
      icon: <TrendIcon className="text-orange-500" />,
    },
  ];
const DashboardProfileData = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl  overflow-hidden md:max-w-2xl">
      <div className="p-6">
        <div className="space-y-4">
          {infoItems.map((item) => (
            <div key={item.id} className="flex items-start">
              <div className="flex-shrink-0 mt-1 mr-4">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
                <p className="text-sm font-semibold text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardProfileData
