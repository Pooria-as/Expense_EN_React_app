import {React,useState} from 'react';
import Card from '../Card/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import "./Expense.css"
const Expense = (props) =>
{
 
    

    return(<Card  className='expenses'>
        {
            props.ExpenseState.map((item)=>{
                return <ExpenseItem
                key={item.id}
                 title={item.title} 
                 amount={item.amount}
                 date={item.date}
                 />
            })
        }
    </Card>)
};

export default Expense;