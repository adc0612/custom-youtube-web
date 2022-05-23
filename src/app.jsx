import '@/app.css';
import { useEffect, useState } from 'react';
import VideoList from '@/views/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube //
      .getMostPopularVideos()
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className='App'>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
