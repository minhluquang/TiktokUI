import VideoContent from './VideoContent';
import VideoInfo from './VideoInfo';

const Video = () => {
  return (
    <div className="max-w-[692px] m-auto p-[20px] pl-0 pr-0 border-b">
      <VideoInfo />
      <VideoContent />
    </div>
  );
};

export default Video;
