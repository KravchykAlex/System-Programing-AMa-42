import React, { useState } from 'react'
import '../assets/css/egyptian_fraction.css'

export default function Egyptian_fraction() {
    const [initialFraction, setInitialFraction] = useState({
        top: null,
        bottom: null,
        result:[],
    });

    const topInputHandler = (e) => {
        setInitialFraction({
            ...initialFraction,
            top: e.target.value, 
        });

    }

    const bottomInputHandler = (e) => {
        setInitialFraction({
            ...initialFraction,
            bottom: e.target.value
        });
    }

    const egyptianFraction = () => {
        let numerator = initialFraction.top;
        let denominator = initialFraction.bottom;
        let denominator_values = [];

        while (numerator !== 0) {
            let current_denominator = Math.ceil(denominator/numerator);

            denominator_values.push(current_denominator);

            numerator = current_denominator*numerator - denominator;

            denominator = denominator*current_denominator;
            } 

        setInitialFraction({
            ...initialFraction,
            result: denominator_values,
        })
        }

    return (
        <div className="egyptian_fraction__container">
            <div className="wrapper">
                <form action="" className="form">
                    <div>
                        <input onChange={topInputHandler} className="input" type="text"/>
                        <input onChange={bottomInputHandler} className="input" type="text"/>
                    </div>
                    <p>=</p>
                </form>
                <div className="output-container">
                    {initialFraction.result.map((result, index) => {
                        return (
                        <div key={index} className="output">
                            <div className="fraction">
                                <p className="box">1</p>
                                <p className="box">{result}</p>
                            </div>
                            {index < initialFraction.result.length - 1 ?
                                <p className="plus">+</p> :
                                ''
                            }
                        </div>
                        )
                        })
                    }
                </div>
            </div>
            <button 
                disabled={initialFraction.top === null || initialFraction.bottom === null ? true : false} 
                onClick={egyptianFraction} 
                className="btn fraction-btn" 
                type="button">Calculate</button>
        </div>
    )
}
