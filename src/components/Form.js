import React, { useState } from 'react'
import './Form.css'
import task from '../components/task.json'
import Lottie from "lottie-react";

const Form = (props) => {

    const addListHandler=(event)=>{
    event.preventDefault();
    props.onAddList(enteredList);
    setenteredList('')
    }


    const[enteredList, setenteredList]=useState('')

    const listChangeHandler=(event)=>{
        setenteredList(event.target.value);
    }

    return (
        <form onSubmit={addListHandler} className='input_wrapper' style={{backgroundColor: 'cadetblue', height: 400}}>
            <h1>ToDo Apps</h1>
            <p style={{fontSize: 10}}>by Sufian Rahim</p>
            <Lottie animationData={task} style={{height: '45%'}} />
            <input className='input' id='task' placeholder='Insert Task' type='text' value={enteredList} onChange={listChangeHandler} required />
            <button style={{
                padding: 10,
                borderRadius: 110
            }}>Add</button>
        </form>
    )
}

export default Form
