import { Component } from "react";
import style from '../styles/card.module.css'
export default class Card extends Component
{

    componentWillUnmount(){
        alert(`A person with ${this.props.data.email} was removed from network`)
    }

    render()
    {
        const {deleteCard,data} = this.props;

        return (
            <>
                <main>
                    <div className={style.outerCard}>
                        <span onClick={()=> deleteCard(data)}>X</span>
                        <img 
                            src={data.img}
                            alt="person" 
                        />
                        <p>{data.email}</p>
                    </div>
                </main>
            </>
        )
    }
}