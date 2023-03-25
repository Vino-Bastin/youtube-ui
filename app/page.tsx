import React from "react";

import { feedVideos } from "../data/data";
import VideoCard from "@/components/VideoCard";

export default function Home() {
  return (
    <div className="px-4 py-4 w-full sidebar grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
      {feedVideos.map((video) => (
        <VideoCard key={video.title + Math.random().toString()} video={video} />
      ))}
    </div>
  );
}
