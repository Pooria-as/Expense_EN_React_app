import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) =>
{
    const SaveNewExpense = (ExpenseData)=>
    {
        const expenseData={
            ...ExpenseData,
            id :Math.floor(Math.random() *100).toString()
        }
        // console.log(expenseData)
        props.create(expenseData)
    }

    return(<div className='new-expense'>
        <ExpenseForm onSaveExpenseDate={SaveNewExpense}/>
    </div>

    );
}

export default NewExpense