import React from "react";

const VideoListItem= (props) => {
    const video = props.video;
    const videoImageURL = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    const onVideoSelect = props.onVideoSelect;

    console.log(video);
    return (
        <div>
            <li onClick={() => onVideoSelect(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={videoImageURL} alt=""/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{videoTitle}</div>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default VideoListItem;