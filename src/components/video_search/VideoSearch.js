import React,{useRef} from 'react';
import styles from './VideoSearch.module.css';

const VideoSearch=({onSearch})=>{
    const inputRef=useRef();
    const handleEnter=(e)=>{
        if(e.key==='Enter'){
            const keyword=inputRef.current.value;
            console.log(keyword);
            onSearch(keyword);
        }
    }
    return(
    <header className={styles.header}>
        <p className={styles.logo}>
            <i className='fa fa-tv'></i>
        </p>
            <input
                onKeyPress={handleEnter}
                ref={inputRef}
                className={styles.input} 
                placeholder="SEARCH HERE"
            />
            <i id={styles.searchLogo} className="fas fa-search"></i>        
    </header>
    )
}

export default VideoSearch;