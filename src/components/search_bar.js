import React, { Component } from 'react'; // same thing as 'const Component = React.Component;'



// const SearchBar = () => {
//     return <input />
// };


class SearchBar extends Component{  //State is exclusive to class based componets
    constructor (props){
        super(props);
        this.state = { term: ''}; //only inside constructor function  state is manipulated in this way
    }

    render() {
        return (
            <div>
            <input value={this.state.term} onChange = {event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}




export default SearchBar;
