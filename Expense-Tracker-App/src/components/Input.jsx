import cssObj from '../styles/input.module.css';
import {useState, useEffect} from 'react'

export default function Input()
{

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    let [income, setIncome] = useState(0);
    let [expense, setExpense] = useState(0);

    let [totalAmount, setTotalAmount] = useState(5000)

    const handleSubmit = ()=>{
        
        if(parseInt(amount) < 0){
            setExpense(expense += parseInt(amount))
            setTotalAmount(totalAmount += parseInt(amount))

            console.log(expense);
        
        }
        else{
            setIncome(income += parseInt(amount))
            setTotalAmount(totalAmount += parseInt(amount))
        }
        
        setName('')
        setAmount('')
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
                    <span id={cssObj.balance}>${totalAmount}</span>

                    <div className={cssObj.transactionBox}>
                        <div className={cssObj.income}>
                            <span>INCOME</span>
                            <span>{`$${income}`}</span>
                        </div>
                        <hr />
                        <div className={cssObj.expense}>
                            <span>EXPENSE</span>
                            <span>{`$${expense}`}</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}