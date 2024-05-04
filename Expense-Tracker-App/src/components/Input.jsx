import cssObj from '../styles/input.module.css';
import {useState} from 'react'
import TransactionList from './TransactionList';

export default function Input()
{
    const [data, setData] = useState({name : "", amount : ''});
    const [dataValue, setDataValue] = useState({income : 0, expense : 0});

    let [totalAmount, setTotalAmount] = useState(0);
    const [dataList, setDataList] = useState([]);

    const handleSubmit = ()=>{
        const dataVal = parseInt(data.amount)

        setDataList([
            {name : data.name, amount : data.amount},
            ...dataList
        ])

        if(dataVal < 0){
            setDataValue({
                income : dataValue.income, 
                expense : dataValue.expense += dataVal
            })
            setTotalAmount(totalAmount += parseInt(data.amount))
            
        }else{
            setDataValue({
                income : dataValue.income += dataVal, 
                expense : dataValue.expense
            });
            setTotalAmount(totalAmount += parseInt(data.amount))
            
        }

        setData({name : "", amount : ''})
    }

    // let tempVar = data.map(()=> )

    const handleName = (e)=> setData({name : e.target.value, amount : data.amount})
    const handleAmount = (e)=> setData({name : data.name, amount : e.target.value})

    return(
        <>
            <main>
                <div className={cssObj.inputContainer}>
                    <h2>Add new transaction</h2>
                    <span>Text</span>
                    <input type="text" name="tName" id={cssObj.tName}
                        value={data.name}
                        onChange={handleName}
                    />
                    <span>Amount</span>
                    <p>(negative - expense, positive - income)</p>

                    <input type="number" name="amount" id="amount" 
                        value={data.amount}
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
                            <span>{`$${dataValue.income}`}</span>
                        </div>
                        <hr />
                        <div className={cssObj.expense}>
                            <span>EXPENSE</span>
                            <span>{`$${dataValue.expense}`}</span>
                        </div>
                    </div>

                    <span>Transaction</span>
                    <hr />
                    {
                        dataList.map((list, index)=>{
                            return(
                                < TransactionList 
                                    key={index}
                                    list = {list}
                                />
                            )
                        })
                    }

                </div>

            </main>
        </>
    )
}