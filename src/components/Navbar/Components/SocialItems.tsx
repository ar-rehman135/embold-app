import { Instagram } from '@/assets/icons/instagram';
import { InstagramIcon } from '@/assets/icons/sidebar/instagram';
import { TickTokIcon } from '@/assets/icons/sidebar/tictok';
import { YoutubeIcon } from '@/assets/icons/sidebar/youtube';

export function SocialItem({
  platform,
  connected = false,
  followers,
  status,
}: {
  platform: string;
  connected?: boolean;
  followers?: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {platform === 'Instagram' ? (
          <InstagramIcon />
        ) : platform === 'TikTok' ? (
          <TickTokIcon />
        ) : (
          <YoutubeIcon />
        )}
        <span className="text-slate-400 text-sm">{platform}</span>
      </div>
      <div
        className={` flex items-center gap-2 bg-white  px-2 py-1 rounded-sm  ${status === 'Linked' ? 'bg-[#D0E0FB] ' : 'bg-[#ECEDEE] '}`}
      >
        <p
          className={`text-[10px] ${status === 'Linked' ? ' text-[#1362E1]' : ' text-[#D92632]'}`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
