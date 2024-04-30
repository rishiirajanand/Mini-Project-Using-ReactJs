import { Component } from "react";
import cartCss from '../styles/cart.module.css'

export default class Cart extends Component
{
    render()
    {
        const {courses,isInCart} = this.props;
        const {toggleCart} = this.props;
        console.log(this.props);
        
        return (
            <>
                <div className={cartCss.cartContainer}>
                    <img 
                        src="https://res.cloudinary.com/dl26pbek4/image/upload/v1675071292/cn-questions/wp5191387-js-wallpapers_lmcxnn.jpg" 
                        alt="node" 
                    />
                    <div className={cartCss.cartBody}>
                        <h1>NodeJS Tutorial and Projects Course (2024)</h1>
                        <p>
                            Learn Node.js by building real-world applications with Node JS, Express, MongoDB.
                        </p>
                        <div className={cartCss.cartButtonBox}>
                            <span>1500</span>
                            <button className={cartCss.addToCartBtn} onClick={()=> toggleCart(courses)}>
                                {isInCart ? 'Remove from Bag' : 'Add to bag'}
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
