import React from 'react'

const ContentItem = ({ title, value, containerClassname, itemClassname }) => {
    return (
        <div className={containerClassname}>
            <div className={itemClassname}><span className="text-muted h5">{title}:</span></div>
            <div className={itemClassname}><span className="h5">{value}</span></div>
        </div>
    )
}

export default ContentItem;