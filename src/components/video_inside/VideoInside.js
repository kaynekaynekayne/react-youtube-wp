import React from 'react';
import styles from './VideoInside.module.css';

const VideoInside=({video})=>{

    return(
        <section className={styles.container}>
        <iframe 
            className={styles.video}
            type="text/html" 
            width="720" 
            height="405"
            src={`https://www.youtube.com/embed/${video.id.videoId || video.id}`}
            frameBorder="0"
            allowFullScreen>
        </iframe>
        <h2>{video.snippet.title}</h2>
        <h3>{video.snippet.channelTitle}</h3>
        <pre className={styles.description}>{video.snippet.description}</pre>
        </section>
    )
}

export default VideoInside;

