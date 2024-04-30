import { Component } from "react";
import CartList from '../components/CartList.jsx'
import Navbar from '../components/Navbar.jsx'
import Sidebar from "../components/Sidebar.jsx";
import { courses,instructors } from "../utils/data.jsx";

export default class Home extends Component
{
    constructor()
    {
        super();
        this.state = {
            courses : courses,
            instructors : instructors,
            bagCount : 0,
        }
    }

    handleCart = (courseProps)=>{
        let {courses, bagCount} = this.state;

        const getId = courses.indexOf(courseProps);
        courses[getId].isInCart = !courses[getId].isInCart;

        if(courses[getId].isInCart){
            console.log(bagCount);
            bagCount += 1
        }else{
            bagCount -= 1
        }

        this.setState({
            courses : courses,
            bagCount : bagCount
        })
    }

    handleFollow = (instructor)=>{
        let {instructors} = this.state;
        const getId = instructors.indexOf(instructor)
        console.log(getId);

        instructors[getId].isFollow = !instructors[getId].isFollow;

        this.setState({
            instructors : instructors
        })
    }

    render()
    {
        const {courses, bagCount, instructors} = this.state;
        
        return (
            <>
                < Navbar 
                    bagCount = {bagCount}
                />
                <main>
                    <div>
                        < CartList
                            courses = {courses}
                            toggleCart = {this.handleCart}
                        />
                    </div>
                    <div>
                        {
                            instructors.map((instructor, index)=>(
                                < Sidebar 
                                    key={instructor.id}
                                    toggleFollow = {this.handleFollow}
                                    instructor = {instructor}
                                />
                            ))
                        }
                    </div>
                </main>
            </>
        )
    }
}