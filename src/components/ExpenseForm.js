import React, {useState, useContext} from 'react' 
import './ExpenseForm.css'
import { BiRightArrow} from "react-icons/bi";
import { v4 as uuidv4 } from 'uuid';
import { UpdateContext } from '../context/update-context'

const ExpenseForm = (props) => {

    const updateContext = useContext(UpdateContext);

    const [charge , setCharge] = useState('');
    const [amount, setAmount] = useState('');
    const [id, setId] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();    
                props.onSubmit({
                charge: updateContext.expense.charge,
                amount: updateContext.expense.amount,
                id: uuidv4()
            });
        setCharge('');
        setAmount('');
    }

    return (
        <form className='form' onSubmit={onSubmitHandler}>
            <div className='form__container'>
                <div>
                    Charge 
                    <br />
                    <input type="text" placeholder='e.g Rent' value= {updateContext.expense.charge} onChange={e => setCharge(e.target.value)}/> <span><hr /></span>
                </div>
                <div>
                    Amount  
                    <br />
                <   input type="text" placeholder='e.g 100' value= {updateContext.expense.amount}  onChange={e => setAmount(e.target.value)}/> <span><hr /></span>
                </div>
            </div>
            <button className='btn'>
                 Submit
                <BiRightArrow className='icon'/>
            </button>
        </form>
    )
}

export default ExpenseForm
