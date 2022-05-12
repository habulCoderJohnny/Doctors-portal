import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-banner bg-cover">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-md rounded-lg shadow-3xl" />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p class="py-6 justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum quo ratione fuga quidem iusto similique minus. Quae aperiam tempore iste assumenda, quod nisi obcaecati cupiditate dolore minima harum odio magnam voluptatem velit et ut tenetur! Quis perspiciatis voluptate nobis..</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;