import { Component } from "react";
import CartList from '../components/CartList.jsx'
import Navbar from '../components/Navbar.jsx'

import { courses } from "../utils/data.jsx";

export default class Home extends Component
{
    constructor()
    {
        super();
        this.state = {
            courses : courses,
            isInCart : false
        }
    }

    handleCart = (courseProps)=>{
        this.setState({
            isInCart : !this.state.isInCart
        })
    }

    render()
    {
        const {courses,isInCart} = this.state;
        return (
            <>
                < Navbar />
                < CartList
                    courses = {courses}
                    isInCart = {isInCart} 
                    toggleCart = {this.handleCart}
                />
            </>
        )
    }
}