import { Users, Circle } from "lucide-react";

interface StreamCardProps {
  title: string;
  streamerName: string;
  gameName: string;
  viewerCount: number;
  thumbnail: string;
  streamerAvatar: string;
  isLive?: boolean;
}

const StreamCard = ({
  title,
  streamerName,
  gameName,
  viewerCount,
  thumbnail,
  streamerAvatar,
  isLive = true,
}: StreamCardProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Stream Thumbnail */}
      <div className="relative overflow-hidden rounded-lg aspect-video bg-slate-800">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Live Indicator */}
        {isLive && (
          <div className="absolute top-2 left-2 flex items-center space-x-1 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
            <Circle className="w-2 h-2 fill-current" />
            <span>LIVE</span>
          </div>
        )}

        {/* Viewer Count */}
        <div className="absolute bottom-2 right-2 flex items-center space-x-1 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          <Users className="w-3 h-3" />
          <span>{viewerCount.toLocaleString()}</span>
        </div>
      </div>

      {/* Stream Info */}
      <div className="mt-3 flex space-x-3">
        {/* Streamer Avatar */}
        <div className="flex-shrink-0">
          <img
            src={streamerAvatar}
            alt={streamerName}
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Stream Details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium text-sm line-clamp-2 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{streamerName}</p>
          <p className="text-gray-500 text-xs mt-1">{gameName}</p>
        </div>
      </div>
    </div>
  );
};

export default StreamCard;
