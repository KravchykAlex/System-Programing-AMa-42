import React, { useState, useEffect } from 'react';
import '../assets/css/binary_search.css'


export default function Binary_search() {

    const [search, setSearch] = useState({
        array: [4,1,9,3,9,8,0,12,87,45,98,34,24,54,99,20],
        // slicedArray:[],
        element: null,
        middleElement: [],
        steps: [],
    });

    const [result, setResult] = useState({
        error: false,
    });

    const getElementHandler = e => {
        console.log(e.target.value);
        setSearch({
            ...search,
            element: e.target.value,
        });
    };

    const helperFunction = (prev, cur) => {
        if (prev < cur) return -1;
        if (prev === cur) return 0;
        if (prev > cur) return 1;
    };

    const binarySearch = e => {
        e.preventDefault();
        
        let arr = search.array.sort(helperFunction);
        const final = [];
        final.push(arr);
        const middle = [];
        middle.push(arr[Math.floor(arr.length/2)]);
       
        while (true) {
            if (arr.length === 1 && arr[0] !== Number(search.element)) {
                setResult({
                    error: true,
                });
                break;
            };
            
            if (Number(search.element) !== arr[Math.floor(arr.length/2)]) {
                if(arr[Math.floor(arr.length/2)] < Number(search.element)) {
                    // console.log("Middle element :", arr[Math.floor(arr.length/2)]);
                    arr = arr.slice(arr.length/2 + 1 , arr.length);
                    final.push(arr);
                    middle.push(arr[Math.floor(arr.length/2)])

                } else {
                    // console.log("Middle element :", arr[Math.floor(arr.length/2)]);
                    arr = arr.slice(0, arr.length/2);
                    final.push(arr);
                    middle.push(arr[Math.floor(arr.length/2)])

                };

            } else if (Number(search.element) === arr[Math.floor(arr.length/2)]) {
                setResult({
                    error: false,
                });
                break;
            } 
            
        };
        setSearch({
            ...search,
            middleElement: middle,
            steps: final,
        })
    }

    return (
        <div className="binary_search-container">
            <form onSubmit={binarySearch} className="binary_search-form" action="">
                <input onChange={getElementHandler} className="binary_search-input" type="text"/>
                <input className="binary_search-btn" type="submit" value="Submit"/>
                <button className="binary_search-btn" type="button">Refresh Array</button>
            </form>
            <div className="content-container">
                { search.steps.map((array, index) => {return(
                    <div key={index} className="content">
                        <p>Step :<span className="iteration">  {index+1}</span></p>
                        <div>
                        <p>[{array.join(', ')}]</p>
                        <p>{`Middle Element : ${search.middleElement[index]}`}</p>
                        { index+1 === search.steps.length && result.error ? 
                            <p style={{'position': 'absolute', 'bottom': '1rem', 'textShadow':'0 0 0.5rem rgba(255, 0, 0, 0.5'}}>NO_SUCH_ELEMENT</p> :
                        ''}
                        </div>
                    </div>
                )})}
            </div>
        </div>
    )
}
