import { useState,useRef,useEffect } from 'react'
import {TbPlayerTrackPrev,TbPlayerPauseFilled,TbPlayerPlay,TbPlayerTrackNext} from 'react-icons/tb'

// interface PlayType{
//   title:string,
//   img:string,
//   sound:string,
//   bookContent:string,
// }

const PlayBook = (book) => {
    const [play ,setPlay] = useState(false);
const [duration, setDuration] = useState(0);
const [currentTime, setCurrentTime] = useState(0);
const skipAmount = 10; // 10 seconds to skip forward

const audioRef = useRef(null);
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

const handelClick = () => {
    if (audioRef.current) {
        play ? audioRef.current.pause() : audioRef.current.play();
        setPlay(!play);
        setInterval(updateProgress,1000)
      }
}
const updateProgress = () => {
    if (audioRef.current) {
      const { duration, currentTime } = audioRef.current;
      setDuration(duration);
      setCurrentTime(currentTime);
    }
  };

  const skipForward = (skipAmount) => {
    if (audioRef.current) {
      audioRef.current.currentTime += skipAmount;
    }
  };
  useEffect(() => {
    const audioElement = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audioElement.currentTime);
    };

    audioElement.addEventListener('timeupdate', updateTime);

    return () => {
      audioElement.removeEventListener('timeupdate', updateTime);
    };
  }, []);
  useEffect(() => {
    const audioElement = audioRef.current;

    return () => {
      audioElement.pause();
      audioElement.currentTime = 0;
    };
  }, []);
  return (
    <div className="play_audio">
                <h4 className='color-2'>{book.title}</h4>
                <div className="audio">
                <audio ref={audioRef} src={book.sound} />
                    <div className='sound_progress'>
                        <div className="duration">
                            <span>{formatTime(currentTime)}</span> / 
                            <span> {formatTime(duration)}</span>
                        </div>
                        <progress className='bar' value={currentTime} max={duration}></progress>
                        <div className="prev_next">
                            <i onClick={()=>{skipForward(-skipAmount)}}><TbPlayerTrackPrev/></i>
                            {
                               play ? <i onClick={handelClick}><TbPlayerPauseFilled/></i> :<i onClick={handelClick}><TbPlayerPlay/></i>
                            }
                            
                            <i onClick={()=>{skipForward(skipAmount)}}><TbPlayerTrackNext/></i> 
                            
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default PlayBook