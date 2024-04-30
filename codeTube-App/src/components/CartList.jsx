import { Component } from "react";
import Cart from "./Cart.jsx";

export default class CartList extends Component
{
    render()
    {
        const {courses} = this.props;
        const {toggleCart} = this.props;
        

        return(
            <>
                {
                    courses.map((course)=>(
                        < Cart key={course.id}
                            course = {course}
                            toggleCart = {toggleCart}

                        />
                    ))
                }
            </>
        )
    }
}