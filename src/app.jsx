import '@/app.css';
import { useCallback, useEffect, useState } from 'react';
import VideoList from '@/views/video_list/video_list';
import SearchHeader from '@/components/search_header/search_header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = useCallback(
    (query) => {
      youtube //
        .search(query)
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );

  useEffect(() => {
    youtube //
      .getMostPopularVideos()
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className='App'>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
