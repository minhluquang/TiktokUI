import { useEffect } from 'react';
import Video from '~/components/Video';

import '~/index.css';

const Home = () => {
  useEffect(() => {
    document.getElementById('focus').focus();
  }, []);

  return (
    <div id="focus" tabIndex="1" className="flex flex-col items-center ">
      <Video></Video>
      <Video></Video>
      <Video></Video>
      <Video></Video>
    </div>
  );
};

export default Home;
