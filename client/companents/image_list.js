// Create out image list component
// Import React
import React from "react";
import ImageDetail from './image_detail';

const IMAGE = [
    { title: 'Pen', link: 'http://dummyimage.com/600x400'  },
    { title: 'Pine Tree', link: 'http://dummyimage.com/600x400' },
    { title: 'Mug', link: 'http://dummyimage.com/600x400' }
]

//  Create our component
const ImageList = () => {
    const RenderedImages = IMAGE.map(function() {
        return <ImageDetail />
    });

    return (
    <ul>
        {RenderedImages}
    </ul>
    );
};

// Export our component
export default ImageList;