import React from 'react';

const CreatePost = () => {
    return (
        <div className="create-post container">
            <div className="card d-flex flex-row justify-content-between bg-white shadow-sm w-100 pr-3 pl-3">
                <div className="avatar rounded-circle p-4 mt-4 mb-3 ml-2" />
                <div className="create-post__input h-50 w-100 d-flex flex-row justify-content-between mt-4 ml-3 mr-2 pb-2 pt-2 cursor-pointer">
                    <span className="ml-4">
                        Posto fotografi apo artikull
                    </span>
                    <span className="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default CreatePost;