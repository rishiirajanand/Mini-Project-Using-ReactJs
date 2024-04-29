import React from "react";
import navCss from './navbar.module.css'



export default class Navbar extends React.Component
{
    render(){
        return(
            <>
               <nav className={navCss.nav}>
                    <span>
                        <a href="#">
                            <img src="https://cdn-icons-png.flaticon.com/128/11990/11990040.png" alt="logo" />
                        </a>
                    </span>
                    <div className={navCss.cart}>
                        <img src="https://cdn-icons-png.flaticon.com/128/10809/10809738.png" alt="cart" />
                    </div>
               </nav>
            </>
        )
    }
}

