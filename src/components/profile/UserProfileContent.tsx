import React from 'react'

const UserProfileContent = () => {
    return (
        <section className="container bg-white rounded mt-5 justify-content-center">
            <div className="container w-75 pl-5 pt-3">
                <div className="row">
                    <div className="col-6"><span className="text-muted">Email:</span></div>
                    <div className="col-6"><span>Telly.Hoeger@billy.biz</span></div>
                </div>
                <div className="row mt-4">
                    <div className="col-6"><span className="text-muted">Email:</span></div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4"><span className="text-muted">Street:</span></div>
                            <div className="col-4"><span>Telly.Hoeger@billy.biz</span></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-4"><span className="text-muted">Suite:</span></div>
                            <div className="col-4"><span>Telly.Hoeger@billy.biz</span></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-4"><span className="text-muted">City:</span></div>
                            <div className="col-4"><span>Telly.Hoeger@billy.biz</span></div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-4"><span className="text-muted">Zipcode:</span></div>
                            <div className="col-4"><span>Telly.Hoeger@billy.biz</span></div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6"><span className="text-muted">Phone:</span></div>
                    <div className="col-6"><span> 210.067.6132</span></div>
                </div>
                <div className="row mt-4">
                    <div className="col-6"><span className="text-muted">Website:</span></div>
                    <div className="col-6"><span>Telly.Hoeger@billy.biz</span></div>
                </div>
                <div className="row mt-4 mb-5 pb-2">
                    <div className="col-6"><span className="text-muted">Company:</span></div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4"><span className="text-muted">Name:</span></div>
                            <div className="col-4"><span>Telly.Hoeger@billy.biz</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfileContent;