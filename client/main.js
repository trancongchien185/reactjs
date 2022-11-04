// Any JS here is automatically ran for us

//  Import the React Library
import React, { Component } from "react";
import  ReactDOM  from "react-dom";
import axios from 'axios';
import ImageList from "./companents/image_list";

// Creact a comoment
class App extends Component {
    constructor(props) {
        super(props);

        this.state = { images: [] };
    }


    componentWillUnmount() {
        //  Fantastic place to load data!
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({ images: response.data.data }));
            //  NEVER DO THIS-
            //  this.state.images = ( {}, {});
    }

    render() {
        return(
            <div>
                <ImageList images={this.state.images} />
            </div>
         )
    }
}
 
//  Render this component th the screen
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
    
})
