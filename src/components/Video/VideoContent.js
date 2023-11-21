import React, { useRef, useState } from 'react';
import { CommentIcon, FavoriteIcon, HeartIcon, ShareIcon } from '../Icons';

const VideoContent = () => {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(false);

  const handleVideo = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="flex flex-row">
      <video
        ref={videoRef}
        onClick={handleVideo}
        loop
        className="w-[50%] ml-[64px] mt-[15px] rounded-lg"
        src="https://firebasestorage.googleapis.com/v0/b/tiktok-clone-be0aa.appspot.com/o/posts%2F8rxTFKT6J017l5utQCdt%2Fimage?alt=media&token=069e9626-e833-414a-b5ec-2076ea1e4304"
      ></video>
      <div className="flex flex-col justify-end ml-7">
        <div className="text-center mb-4">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <HeartIcon className="text-xl text-center cursor-pointer" />
          </div>
          <span>4.5M</span>
        </div>
        <div className="text-center mb-4">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <CommentIcon className="text-xl text-center cursor-pointer" />
          </div>
          <span>4.5M</span>
        </div>
        <div className="text-center">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <FavoriteIcon className="text-xl text-center cursor-pointer" />
          </div>
          <span>4.5M</span>
        </div>
        <div className="text-center">
          <div className="w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center">
            <ShareIcon className="text-xl text-center cursor-pointer" />
          </div>
          <span>4.5M</span>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
