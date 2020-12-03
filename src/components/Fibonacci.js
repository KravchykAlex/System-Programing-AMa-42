import React, { useState, useEffect } from 'react';
import '../assets/css/fibonacci.css';

export default function Fibonacci() {

    const [position, setPosition] = useState(null);
    const [output, setOutput] = useState(null)

    useEffect(() => {
        console.log(position, typeof(position));

        console.log(output, typeof(output));
        
    }, [position, output])
    const getPositionHandler = e => {
        setPosition(Number(e.target.value));
    }

    const submitHandler = e => {
        e.preventDefault();
        setOutput(fibonacci(Number(position)));
    }

    const fibonacci = position => {

        return position <= 1 ? 1 : fibonacci(position-1) + fibonacci(position-2);
    }

    return (
        <div className="fibonacci-container">
            <form onSubmit={submitHandler} action="" className="fibonacci-form">
                <input onChange={getPositionHandler} className="fibonacci-input" type="text"/>
                <input className="fibonacci-btn" type="submit" value="Submit"/>
            </form>

            <div className="fibonacci__output">
                <p>{output}</p>
            </div>
        </div>
    )
}
