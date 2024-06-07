import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import jack from '../../assets/jack.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls muted autoPlay ></video>
      <h3>Best youtube channel to learn web development</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 dayse ago</p>
        <div>
            <span><img src={like} alt="" />125</span>
            <span><img src={dislike} alt="" />2</span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
            <p>SyedMehandi</p>
            <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes easy</p>
        <p>Subscribe SyedMehandi to watch more tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Syed Hussain <span>1 day ago</span></h3>
                <p>This is completely nuts. Thank you for this knowledge and insane hard work given for free to us. I am an Angular developer and I was looking to become full-stack with Java and I think I've found gold</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Syed Hussain <span>1 day ago</span></h3>
                <p>This is completely nuts. Thank you for this knowledge and insane hard work given for free to us. I am an Angular developer and I was looking to become full-stack with Java and I think I've found gold</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Syed Hussain <span>1 day ago</span></h3>
                <p>This is completely nuts. Thank you for this knowledge and insane hard work given for free to us. I am an Angular developer and I was looking to become full-stack with Java and I think I've found gold</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Syed Hussain <span>1 day ago</span></h3>
                <p>This is completely nuts. Thank you for this knowledge and insane hard work given for free to us. I am an Angular developer and I was looking to become full-stack with Java and I think I've found gold</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
