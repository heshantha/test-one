import './Basket.css'
import React, { useState, useEffect } from 'react';
import Button from '../button/Button'

const Basket = () => {

    let [basketItems, setBasketItems] = useState(0);

    const productAdd = () => {
        setBasketItems(items =>  items < 20 ? items + 1: items )
    }
    const productRemove = () => {
        setBasketItems(items =>  items !== 0 ? items - 1: items )
    }
    return (
        <div>
            <div className="basket-block" onClick={() => setBasketItems(basketItems++)}>
                <div className="item-number">{basketItems}</div>
            </div>
            <div className="btn-block">
            <button className="btn btn-primary"  basketItems={basketItems}  onClick={productAdd} >+</button>
            <button  className="btn btn-secondry" basketItems={basketItems}  onClick={productRemove} >-</button>
            </div>
        </div>
    );
}

export default Basket;