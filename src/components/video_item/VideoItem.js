import React,{memo} from 'react';
import styles from './VideoItem.module.css';

const VideoItem = memo( 
    ({video,onVideoClick,display}) => {

    const displayVideo = display==='detail' ? styles.detail : styles.home;
    
    return(
        <li onClick={()=>{onVideoClick(video)}} className={`${styles.container} ${displayVideo}`}>
            <div className={styles.video}>
                <img className={styles.thumbnail} src={video.snippet.thumbnails.medium.url}/>
                <div className={styles.textbox}>
                    <p className={styles.title}>{video.snippet.title}</p>
                    <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
                </div>
            </div>
        </li>
    )
});

export default VideoItem;