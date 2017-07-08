import React, { Component } from "react";

/*
// functional component or stateless component

const SearchBar = () => {
    return <input type="text"/>
};
*/

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <img className="logo img-responsive center-block" src="../../YouTube-logo.png" alt=""/>
                </div>
                <div className="search-bar col-md-9">
                <input autoFocus
                    type="text" 
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value) } /> 
                </div>
            </div>
        );
    }
};

export default SearchBar;