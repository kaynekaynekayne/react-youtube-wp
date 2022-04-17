import React,{useState,useEffect} from 'react';
import styles from './App.module.css';
import VideoList from './components/video_list/VideoList';
import VideoSearch from './components/video_search/VideoSearch';
import VideoInside from './components/video_inside/VideoInside';

const App=()=>{

  const [videos,setVideos]=useState([]);
  const [selectedVideo,setSelectedVideo]=useState(null);

  const selectVideo=(video)=>{
    setSelectedVideo(video);
  }

  const search=(query)=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyDtxM0gI2XN7x_07Ll7iQrwdt2VT84_eOQ`, 
      requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyDtxM0gI2XN7x_07Ll7iQrwdt2VT84_eOQ", 
    requestOptions)
      .then(response => response.json())
      .then(result=>result.items.map(item=>({...item, id:item.id.videoId})))
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  },[]);
  

  return(
    <div className={styles.frame}>
      <VideoSearch onSearch={search}/>
      <section className={styles.container}>
        {selectedVideo && (<div>
          <VideoInside video={selectedVideo}/>
        </div>)}
        <div className={styles.list}>
          <VideoList 
            videos={videos} 
            onVideoClick={selectVideo}
            display={selectedVideo ? 'detail' : 'home'}
          />
        </div>
      </section>
    </div>
  )
}

export default App;