import { Component } from "react";
import Cart from "./Cart.jsx";

export default class CartList extends Component
{
    render()
    {
        const {courses,isInCart} = this.props;
        const {toggleCart} = this.props;

        return(
            <>
                < Cart
                    courses = {courses}
                    isInCart = {isInCart}
                    toggleCart = {toggleCart} 
                />
            </>
        )
    }
}