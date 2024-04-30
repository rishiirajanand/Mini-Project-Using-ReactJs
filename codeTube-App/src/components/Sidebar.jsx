import { Component } from "react";
import sidebarCSS from '../styles/sidebar.module.css';


export default class Sidebar extends Component
{
    render()
    {
        const {toggleFollow , instructor} = this.props;
        const {name, image, isFollow} = instructor;
        
        return (
            <>
                <div className={sidebarCSS.sidebarContainer}>
                    <img src={image} alt="writer" />

                    <h2>{name}</h2>

                    <button className={sidebarCSS.followBtn} onClick={()=> {toggleFollow(instructor)}}>
                        {isFollow ? 'Unfollow' : 'Follow'}
                    </button>
                </div>
            </>
        )
    }
}