import React from 'react'

const UserProfileHeader = () => {
    return (
        <div className="d-flex flex-row justify-content-center mt-5">
            <div className="rounded-circle p-5 bg-white"/>
            <div className="d-flex flex-column ml-4 mt-3">
                <h5>Filan Fisteku</h5>
                <p className="text-muted">@hehe</p>
            </div>
        </div>
    )
}

export default UserProfileHeader;