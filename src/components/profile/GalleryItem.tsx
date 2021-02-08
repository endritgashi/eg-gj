import React from 'react'

const GalleryItem = ({ url, thumbnail }) => {
    return (
        <a href={url} data-toggle="lightbox" data-gallery="gallery" className="col-md-2 mt-3">
            <img src={thumbnail} className="img-fluid rounded" />
        </a>
    )
}
export default GalleryItem;