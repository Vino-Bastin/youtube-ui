/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

import { IFeedVideo } from "./../data/data";

interface VideoCardProps {
  video: IFeedVideo;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="flex flex-col cursor-pointer gap-3">
      <div className="relative w-full h-[200px]">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-3">
        <div>
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            className="rounded-full w-8 h-8 object-cover"
          />
        </div>
        <div className="flex flex-col flex-wrap">
          <h3 className="text-sm font-medium">{video.title}</h3>
          <p className="text-xs text-gray-500">{video.channelName}</p>
          <p className="text-xs text-gray-500">
            {Intl.NumberFormat("US").format(video.viewCount).toString()} views
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
