import React from 'react';
import SHOP_DATA from './shop.data';
import './shop.style.scss';
import CollectionPreview from '../../Components/collectionPreview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            collections:SHOP_DATA
        };
    }
    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}> salut</CollectionPreview>
                    )
                    )
                }
            </div>
        )
    }
} 
export default ShopPage;