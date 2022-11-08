import React from 'react';
import Card from './Card';
const ContainerCards = ({children}) => {
    return (
        <div className='row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3'>
            {children}
        </div>
    );
};

export default ContainerCards;