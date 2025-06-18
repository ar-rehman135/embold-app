import { Badge } from '@/shadcn/badge';
import React from 'react';
const Tags = [
  'Lifestyle',
  'Fitness Enthusiast',
  'Travel Blogger',
  'Tech Reviewer',
  'Foodie Creator',
];
const ProfileTags = () => {
  return (
    <div>
      {Tags.map((tag) => (
        <Badge variant="secondary" key={tag} className="ml-2 mb-2 text-[12px] text-[#151719] rounded-3xl px-2">
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default ProfileTags;
