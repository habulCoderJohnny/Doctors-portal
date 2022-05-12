import React from 'react';

const InfoCard = ({img, cardTitle, titleDetail, bgClass, }) => {
    return (
        <div class= {`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="card-img" />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{titleDetail}</p>
                <div class="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default InfoCard;