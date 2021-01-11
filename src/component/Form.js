import React ,{useState} from 'react';

const Form = ({getWeather})=> {
    const[text ,setText]= useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        if(text.trim() !==''){
            getWeather(text);
        }
        setText('');
    }
    return (
        <form action="" className="form-weather" onSubmit={submitHandler}>
            <input onChange={(e)=>{
                setText(e.target.value);
            }} type="search" placeholder="Please Enter Name of City" value={text} />
            <button>
                <i className="fa-search">
                </i>
            </button>
        </form>

    );
}

export default Form;
