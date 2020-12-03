import React, { useState} from 'react'
import '../assets/css/array.css'

export default function Queue() {


    const [array, setArray] = useState([1,2,3,4])
    const [peeked, setPeeked] = useState('');

    const pop = () => {
        setArray(array.splice(0,array.length - 1));
    }

    const push = () => {
        setArray([...array, Math.floor(Math.random()*100)])
    }

    const peek = () => {
        setPeeked(array[0]);
        setArray(array.splice(1,array.length));
    }

    return (
        <div className="array_container">
            <div className="peek__part">
                <div className="peek-container">
                    <p>{peeked}</p>
                </div>
                <button className="btn" onClick={peek}>Peek</button>
            </div>
            <div className="pop__push__part">
                <div className="array">[{array.join(', ')}]</div>
                <div className="pop__push-btn">
                    <button className="btn" onClick={pop}>Pop</button>
                    <button disabled={array.length<8 ? false : true} className="btn" onClick={push}>Push</button>
                </div>
            </div>
        </div>
    )
}
