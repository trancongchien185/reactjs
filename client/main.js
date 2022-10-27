// Any JS here is automatically ran for us

//  Import the React Library
import React, { Component } from "react";
import  ReactDOM  from "react-dom";
import axios from 'axios';
import ImageList from "./companents/image_list";

// Creact a comoment
class App extends Component {
    componentWillUnmount() {
        //  Fantastic place to load data!
        axios.get('http://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => console.log(response));
     }

    render() {
        return(
            <div>
                <ImageList />
            </div>
         )
    }
}
 
//  Render this component th the screen
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
    
})
