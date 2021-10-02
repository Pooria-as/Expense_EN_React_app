import {React,useState} from "react"
import swal from "sweetalert"
import "./ExpenseForm.css"
const ExpenseForm = (props) =>
{
const [title, setTitle] = useState('')
const [amount, setAmount] = useState('')
const [date, setDate] = useState('')
   

const TitleHandler = (e) =>
{
    setTitle(e.target.value);
}
const AmountHandler = (e) =>
{
    setAmount(e.target.value);
}
const DateHandler = (e) =>
{
    setDate(e.target.value);
}
const SubmitHandler =(e)=>
{
    e.preventDefault();
    const ExpenseFormData={
        title:title,
        amount:amount,
        date:new Date(date)
    }
    



    if(ExpenseFormData.title==='')
    {
        swal("Error!", "title is required!", "warning");    
    }
    if(ExpenseFormData.amount==='')
    {
        swal("Error!", "amount is required!", "warning");    
    }
    else
    {
    props.onSaveExpenseDate(ExpenseFormData)
    }
    setAmount('')
    setDate('')
    setTitle('')
}

    return (
        <form onSubmit={SubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                <label>Title</label>
                    <input 
                    name='Title'
                    onChange={TitleHandler}
                    value={title}
                    placeholder='Title'/>
                </div>
                <div className='new-expense__control'>
                <label>Amount</label>
                    <input name='Amount'
                    type='number'
                    min='0.01' 
                    value={amount}
                    step='0.01' 
                    onChange={AmountHandler}
                    placeholder='Amount'/>
                </div>
                <div className='new-expense__control'>
                <label>Date</label>
                    <input
                    name='date'
                    min='2019-01-12'
                    value={date}
                    max='2023-08-12'
                    type='date'
                    onChange={DateHandler}
                    placeholder='chose date'/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>
                        Add Expense
                    </button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm