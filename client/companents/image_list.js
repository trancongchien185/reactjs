// Create out image list component
// Import React
import React from "react";
import ImageDetail from './image_detail';

//  Create our component
const ImageList = (props) => {
    const RenderedImages = props.images.map(image => 
        <ImageDetail key={image.title} image={image} />
    );

    return (
    <ul className="media-list list-group">
        {RenderedImages}
    </ul>
    );
};

// Export our component
export default ImageList;