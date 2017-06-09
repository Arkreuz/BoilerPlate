import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // ES6 => ({video, onVideoSelect}) == const video = props.video, const onVideoSelect = props.onVideoSelect
    const imageURL =  video.snippet.thumbnails.default.url;
    //const video = props.video;
    return (
        <li onClick = {() => onVideoSelect(video) } className = "list-group-item">
            <div className ="video-list media">
                <div className = "media-left">
                    <img className="media-objetc"  src = {imageURL}/>

                </div>
                <div className = "media-body">
                    <div className = "media-heading">{video.snippet.title}</div>
                </div>

            </div>
        </li>
    );
};


export default VideoListItem;
