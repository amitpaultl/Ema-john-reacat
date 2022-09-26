import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './Card.css'
const Card = ({count}) => {
    return (
        <div>
            <h2>Order</h2>
            <h3 className='card-title'>Order summary</h3>
                <div className='card-detels'>
                    <p>Selected Items: {count.length}</p>
                    <p>Total Price:</p>
                    <p>Total Shipping Charge:</p>
                    <p>Tax:</p>
                    <p className='tota-price'>Grand Total:</p>
                </div>
                <button className='clear bg-red'>
                    <p>Clear Cart</p>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
                <button className='clear bg-orang'>
                    <p>Review Order</p>
                    <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>

                </button>
        </div>
    );
};

export default Card;