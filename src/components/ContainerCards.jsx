import React from 'react';
import Card from './Card';
const ContainerCards = ({children}) => {
    return (
        <div className='container-app'>
            {children}
        </div>
    );
};

export default ContainerCards;