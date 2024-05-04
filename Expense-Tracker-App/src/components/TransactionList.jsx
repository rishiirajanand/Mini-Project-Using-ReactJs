import cssObj from '../styles/input.module.css';
import { useState, useEffect } from 'react';

export default function TransactionList(props)
{
    const {list} = props;
    let amt = parseInt(list.amount);

    console.log(amt);

    let [color, setColor] = useState(amt > 0);

    // useEffect(()=>{
    //     let amt = parseInt(props.list.amount);
    //     if(amt > 0){
    //         setColor(!color)
    //     }
    // },[props.list.amount])
    
    console.log(list.name + " "+ color);


    return (
        
        <div
            className={color ? `${cssObj.history} ${cssObj.greenBorder}` : `${cssObj.history} ${cssObj.redBorder}`}>

            <span>{list.name}</span>
            <span>${list.amount}</span>
        </div>
        
    )
}