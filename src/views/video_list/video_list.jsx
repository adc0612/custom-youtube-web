import React from 'react';
import VideoItem from '@/components/video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos }) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video}></VideoItem>
    ))}
  </ul>
);

export default VideoList;
