import {React,useState} from 'react';
import Expense from './components/Expense/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseData from "./ExpenseData"
import swal from 'sweetalert';



const App =()=>
{

  const [ExpenseState, setExpense] = useState(ExpenseData)

  const create = (newExpense) =>
  {
    // setExpense([newExpense,...ExpenseState]);
    setExpense((prevExpense)=>
    {
      return [newExpense,...prevExpense];
    })
    swal("Success!", "Your word added Successfully", "success");    
  }
  
  return(<div>
    <h1 style={{textAlign:'center'}}>
      Expense Tracker
    </h1>
    <NewExpense create={create}/>
    <Expense ExpenseState={ExpenseState}/>
  </div>
    
  );
}

export default App
