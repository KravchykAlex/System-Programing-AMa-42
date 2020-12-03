import React, { useState } from 'react';
import '../assets/css/sort.css';

export default function Merge_sort() {
    const initialArray = [4,1,9,3,9,8,0,12,87,45,98,34,24,54,99,20];

    const [sorted, setSorted] = useState([]);

    const mergeSort = array => {
        if(array.length > 1) {
            let middleElement = Math.floor(array.length/2);
    
            let leftPart = array.slice(0, middleElement);
            
            let rightPart = array.slice(middleElement, array.length);
            
            mergeSort(leftPart);
    
            mergeSort(rightPart);
    
            let i = 0;
            let j = 0;
            let k = 0;
    
            while (i < leftPart.length && j < rightPart.length) {
                if(leftPart[i] < rightPart[j]) {
                    array[k] = leftPart[i];
                    i += 1;
                } else {
                    array[k] = rightPart[j];
                    j += 1;
                }
                k += 1;
            };
    
            while (i < leftPart.length) {
                array[k] = leftPart[i];
                i += 1;
                k += 1;
            };
    
            while (j < rightPart.length) {
                array[k] = rightPart[j];
                j += 1;
                k += 1;
            }
        
        }
        setSorted(array);
    }

    return (
        <div className="sort-container">
            <div className="box-shadow">
                <p className="initial__array">[{initialArray.join(", ")}]</p>
                <button onClick={() => mergeSort(initialArray)} className="sort-btn">Sort</button>
                <p style={{"opacity": sorted.length > 0 ? "1" : "0"}} className="sorted__array">[{sorted.join(", ")}]</p>
            </div>
        </div>
    )
}
