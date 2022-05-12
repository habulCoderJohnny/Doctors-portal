import React from 'react';

const Service = ({content}) => {
    const {name, describe, img} = content;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt=".." class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{describe}</p>
                <div class="card-actions">
                    <button class="btn btn-primary uppercase text-white font-bold ">Get the service</button>
                </div>
            </div>
        </div>
    );
};

export default Service;