import React, { Fragment } from 'react';
import Button from '../Button';
import { MusicIcon } from '../Icons';

const VideoInfo = () => {
  return (
    <div className="flex flex-row">
      <img
        src="https://lh3.googleusercontent.com/a/ACg8ocLmtB-KB4SZVjpSIIBpn__kxwVqDShKS4uloS20l65f9D4=s288-c-no"
        alt=""
        className="w-[56px] h-[56px] rounded-full"
      />
      <div className="ml-4">
        <div>
          <a href="#" className="text-3xl font-bold hover:underline">
            minhluquang
          </a>
          <a href="#" className="text-2xl ml-2">
            Lữ Quang Minh
          </a>
        </div>
        <div className='text-3xl mb-[2px]'>Tôi đang ngồi fix bug mệt nghỉ :(</div>
        <div className="flex flex-row items-center">
          <MusicIcon />
          <p className="text-2xl ml-2">YOUR SMILE - Emma x Seachains x Obito</p>
        </div>
      </div>
      <div className='ml-auto'>
        <Button outline>Follow</Button>
      </div>
    </div>
  );
};

export default VideoInfo;
