import React from 'react'
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor() {
        super();

        this.state ={
            sections:[
            
            {
              title: 'hats',
              imageUrl: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://images.unsplash.com/photo-1523983254932-c7e6571c9d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=902&q=80',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://images.unsplash.com/photo-1636016954413-44070ee44f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens',
              position:'center-bottom'
            }
          ]
        }
          
    }
    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id,imageUrl, ...otherSectionProps}) =>(
                        <MenuItem key={id} image={imageUrl} {...otherSectionProps}></MenuItem>
                    ))
                }
            </div>
        )
    }
}
export default Directory;