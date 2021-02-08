import React from 'react'

const UserProfileHeader = ({ name, username }) => {
    return (
        <div className="d-flex flex-row justify-content-center mt-5">
            <div className="rounded-circle p-5 bg-white" />
            <div className="d-flex flex-column ml-4 mt-3">
                <h4>{name}</h4>
                <p className="text-muted">@{username}</p>
            </div>
        </div>
    )
}

export default UserProfileHeader;