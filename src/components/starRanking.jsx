import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const StarRanking = (props) => {
    
    const ranking = props.ranking
    return (
        <div className='star-container'>
            {
                [... new Array(5)].map((star, index)=>{
                    return index < ranking ? <FontAwesomeIcon icon="fa-solid fa-star" /> : <FontAwesomeIcon icon="fa-regular fa-star" />

                })
            }
            
        
        </div>
    );
};

export default StarRanking;