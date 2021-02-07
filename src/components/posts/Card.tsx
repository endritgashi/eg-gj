import React from 'react'
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CommentsWrapper from './comments/CommentsWrapper';

const Card = () => {
    return (
        <div className="d-flex flex-column">
            <div className="post container">
                <section className="card bg-white">
                    <CardHeader />
                    <CardBody>
                        <CommentsWrapper />
                    </CardBody>
                </section>
            </div>
            <div className="d-flex justify-content-center mt-4">
            <button type="button" className="btn btn-secondary rounded btn-lg">Shiko më shumë postime</button>
            </div>
        </div>
    )
}

export default Card;