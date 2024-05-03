import cssObj from '../styles/input.module.css';
import {useState, useEffect} from 'react'

export default function Input()
{

    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0)

    let expenceAmount = 0;
    let incomeAmount = 0;


    const handleSubmit = ()=>{
        
        if(amount < 0){
            expenceAmount += parseInt(amount)
        }else{
            incomeAmount += amount
        }
        console.log(expenceAmount);
        setName('');
        setAmount(0)

    }
    const handleName = (e)=> setName(e.target.value)
    const handleAmount = (e)=> setAmount(e.target.value)

    return(
        <>
            <main>
                <div className={cssObj.inputContainer}>
                    <h2>Add new transaction</h2>
                    <span>Text</span>
                    <input type="text" name="tName" id={cssObj.tName}
                        value={name}
                        onChange={handleName}
                    />
                    <span>Amount</span>
                    <p>(negative - expense, positive - income)</p>
                    <input type="number" name="amount" id="amount" 
                        value={amount}
                        onChange={handleAmount}
                    />
                    <button onClick={handleSubmit}>
                        Add Transaction
                    </button>
                </div>


                <div className={cssObj.sidebarContainer}>
                    <h3>YOUR BALANCE</h3>
                    <span id={cssObj.balance}>$</span>

                    <div className={cssObj.transactionBox}>
                        <div className={cssObj.income}>
                            <span>INCOME</span>
                            <span>{`$${incomeAmount}`}</span>
                        </div>
                        <hr />
                        <div className={cssObj.expense}>
                            <span>EXPENSE</span>
                            <span>{`$${expenceAmount}`}</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}