import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title,image, size}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image"
        style ={
            {backgroundImage:`url(${image})`}
        }>

        </div>
        <div className="text">
            <h1 className="title">{title}</h1>
            <span className="shop-text">SHOP NOW !</span>
        </div>
    </div>
)
export default MenuItem;