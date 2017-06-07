import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCdijaQaKjqhUxaYg_pb4a59CassOon3aM';



//new react component -> transpiling with webpack and babel
class App extends Component {  //class and const are a ES6 alternative to var, for constants
    constructor(props){

        super(props);
        this.state = { videos: [] };


        YTSearch({key: API_KEY, term: 'pokemon'}, (videos) => {
            this.setState({ videos }); // ES6 videos: videos = Videos
        });

    }


    render() {
        return (
            <div>
            <SearchBar />
            <VideoList   videos={this.state.videos} />
            </div> //JSX allows HTML inside javascript  -> transpiling
        );
    }
}



//rendering to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
