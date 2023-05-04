import React from 'react'
import './card.css'
import StarRatings from 'react-star-ratings';
import {Link} from 'react-router-dom'
import Button from './Button';
const card = ({i}) => {
    console.log(i)
    return (
        <div className="card-cont">
            <img src={i.img} className="shop-img" alt={ i.shop_name}/>
            <div className="details">
                <h3>Shop Name:{i.shop_name}</h3>
                <h5>Address:    {i.shop_Address}</h5>
               <span> Rating  <StarRatings
                    rating={4}
          starRatedColor="yellow"
            starDimension="20px"
        starSpacing="5px"
          numberOfStars={5}
          name='rating'
                />
                   
                </span>
                <br/>
                 <button className="btn" ><Link to={{pathname:`/detail/${i.shop_id}`}}>Book Now</Link></button>
            </div>
        </div>
    )
}

export default card
