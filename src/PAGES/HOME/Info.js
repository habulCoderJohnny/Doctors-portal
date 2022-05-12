import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" titleDetail="(Available : Sat - Fri, 10:00 AM to 10:00 PM)" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit Our Location" titleDetail="Brooklyn, NY 10036, United States" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" titleDetail="+119486248648" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;