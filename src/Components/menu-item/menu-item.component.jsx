import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title,image, size,history,match,linkUrl}) => (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image"
        style ={
            {backgroundImage:`url(${image})`}
        }>
        </div>
        <div className="text">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="shop-text">SHOP NOW !</span>
        </div>
    </div>
)
export default withRouter(MenuItem);