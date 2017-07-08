import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyAGCaTpm7THGaWnwDWCqJtVaNFGuG6dAJc";


// Create a new component. this component should produce some HTML.

// const -> is an ES6 keyword. (constant, final) value
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo : null 
        };
        this.videoSearch("mindspace react")
    }
    
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // console.log(data);
            // this.setState({ videos: videos });
            this.setState({ 
                videos,
                selectedVideo: videos[0]
             });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>
            </div>
        );
    }
}

// Take this compoonent's generated HTML and put it on the page (in the DOM)

// App -> this is the class
// <App /> -> this is the instant of the component
ReactDOM.render(<App/>, document.querySelector(".container"));