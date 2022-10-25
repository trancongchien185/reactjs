// Any JS here is automatically ran for us

//  Import the React Library
import React from "react";
import  ReactDOM  from "react-dom";
import ImageList from "./companents/image_list";

// Creact a comoment
const App = () => {
    return(
        <div>
            <ImageList />
        </div>
    )
}
 
//  Render this component th the screen
Meteor.startup(() => {

})
ReactDOM.render(<App />, document.querySelector('.container'));
