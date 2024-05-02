import { Component } from "react";
import Card from "./Card";

export default class CardList extends Component
{

    
    render()
    {
        const {handleRemove,network} = this.props

        return (
            <>
                {
                    network.map( person => (
                        person.show && < Card key = {person.id}
                        data = {person}
                        deleteCard = {handleRemove}
                    />
                    ))
                }
            </>
        )
    }
}