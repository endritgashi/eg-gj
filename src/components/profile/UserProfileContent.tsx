import React from 'react';
import ContentItem from './ContentItem';

const UserProfileContent = ({ company, address, email, phone, website }) => {
    console.log(address, "ADDRESS")
    return (
        <section className="container bg-white rounded mt-5 justify-content-center">
            <div className="container w-75 pl-5 pt-3">
                <ContentItem
                    title="Email"
                    value={email}
                    containerClassname="row"
                    itemClassname="col-6"
                />
                <div className="row mt-4">
                    <div className="col-6"><span className="text-muted h5">Address:</span></div>
                    <div className="col-6">
                        <ContentItem
                            title="Street"
                            value={address.street}
                            containerClassname="row"
                            itemClassname="col-4"
                        />
                        <ContentItem
                            title="Suite"
                            value={address.suite}
                            containerClassname="row mt-4"
                            itemClassname="col-4"
                        />
                        <ContentItem
                            title="City"
                            value={address.city}
                            containerClassname="row mt-4"
                            itemClassname="col-4"
                        />
                        <ContentItem
                            title="Zipcode"
                            value={address.zipcode}
                            containerClassname="row mt-4"
                            itemClassname="col-4"
                        />
                    </div>
                </div>
                <ContentItem
                    title="Phone"
                    value={phone}
                    containerClassname="row mt-4"
                    itemClassname="col-6"
                />
                <ContentItem
                    title="Website"
                    value={website}
                    containerClassname="row mt-4"
                    itemClassname="col-6"
                />
                <div className="row mt-4 mb-5 pb-2">
                    <div className="col-6"><span className="text-muted h5">Company:</span></div>
                    <div className="col-6">
                        <ContentItem
                            title="Name"
                            value={company.name}
                            containerClassname="row"
                            itemClassname="col-4"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProfileContent;