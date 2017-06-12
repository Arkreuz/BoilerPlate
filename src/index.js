import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCdijaQaKjqhUxaYg_pb4a59CassOon3aM';



//new react component -> transpiling with webpack and babel
class App extends Component {  //class and const are a ES6 alternative to var, for constants
    constructor(props){

        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("pokemon");

    }

    videoSearch(term){

        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }); // ES6 videos: videos = Videos
        });


    }


    render() {
        const videoSearch = _.debounce((term)  => {this.videoSearch(term) }, 300 );
        return (
            <div className="search-bar">
                <SearchBar onSearchTermChange = {videoSearch}  />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div> //JSX allows HTML inside javascript  -> transpiling
        );
    }
}



//rendering to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
