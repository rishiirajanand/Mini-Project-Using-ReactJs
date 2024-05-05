import cssObj from '../styles/input.module.css';
import { useState, useEffect } from 'react';

export default function TransactionList(props)
{
    const {list} = props;
    return (
        <>
            <div
                className={parseInt(list.amount)>0 ? `${cssObj.history} ${cssObj.greenBorder}` : `${cssObj.history} ${cssObj.redBorder}`}>
                    <span>{list.name}</span>
                   
                <div className={cssObj.historyEdit}>
                    <span>${list.amount}</span>

                    <img src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png" alt="delete" />
                             
                    <img src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png" alt="edit" />
                </div>

            </div>
            
        </>
        
    )
}