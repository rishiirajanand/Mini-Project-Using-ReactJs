import { Component } from "react";
import cartCss from '../styles/cart.module.css'

export default class Cart extends Component
{
    render()
    {
        const {course,toggleCart} = this.props;
        const {price,title,description,instructor,image, isInCart} = course;

        
        return (
            <>
                <div className={cartCss.cartContainer}>
                    <img src={image} alt="node"/>

                    <div className={cartCss.cartBody}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <h3>{instructor}</h3>
                        <div className={cartCss.cartButtonBox}>
                            <span>{price}</span>
                            <button className={cartCss.addToCartBtn} onClick={()=> toggleCart(course)}>
                                {isInCart ? 'Remove from Bag' : 'Add to bag'}
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
