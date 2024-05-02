import { Component } from "react";

export default class Navbar extends Component
{
    render()
    {
        return (
            <>
                <nav style={{padding: '20px', backgroundColor : 'grey'}}>
                    <span style={{fontSize: '20px', fontWeight: '600', color:'#fff'}}>NetWork</span>
                </nav>
            </>
        )
    }
}