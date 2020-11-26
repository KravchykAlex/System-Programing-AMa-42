// Array Methods

const obj = {
    array:[1,5,2,7,3,8],
    // newArray:[],
    Push(element) {
        return this.array = [...this.array, element];
    },

    Pop() {
        // return this.array = this.array.filter((element, index) => index != 0);
        return this.array = this.array.splice(0, this.array.length - 1);
    },

    Peek() {
        let element = this.array[0]
        this.array = this.array.splice(1, this.array.length);
        return element;
    }
}

// Fibonacci

const fibonacci = n => {
    return n <= 1 ? 1 : fibonacci(n-1) + fibonacci(n-2);
}

// Egyptian Fraction

let nr = 12;
console.log('nr :', nr);
let dr = 13;
console.log('dr :', dr);

const beginning = `${nr}/${dr} = `

ef = [];

while (nr != 0) {
    let output = beginning;
    x = Math.ceil(dr/nr);
    console.log('x :', x);

    ef.push(x);
    console.log('ef :', ef);


    nr = x*nr - dr;
    console.log('nr :', nr);

    dr = dr*x;
    console.log('dr :', dr);


    for( let i = 0; i < ef.length; i++) {
        if (i != ef.length - 1) {
            output += ` 1/${ef[i]} +`;
        } else {
            output += ` 1/${ef[i]}`;
        }
    } 
    console.log(output);
    console.log('\n');
}

// Binary Search


const helperFunction = (prev, cur) => {
    if (prev < cur) return -1;
    if (prev === cur) return 0;
    if (prev > cur) return 1;
}

let arr = [4,1,9,3,9,8,0,12,87,45,98,34,24,54,99,20];
const needed_element = 6;

arr = arr.sort(helperFunction);
while (arr.length >= 1) {
    console.log(arr);

    if (needed_element !== arr[Math.floor(arr.length/2)]) {
        if(arr[Math.floor(arr.length/2)] < needed_element) {
            console.log("Middle element :", arr[Math.floor(arr.length/2)]);
            arr = arr.splice(arr.length/2 + 1 , arr.length);
        } else {
            console.log("Middle element :", arr[Math.floor(arr.length/2)]);
            arr = arr.splice(0, arr.length/2);
        };
    } else if (needed_element == arr[Math.floor(arr.length/2)]) {
        console.log('I Found It!');
        break;
    };

    if (arr.length === 1 && arr[0] != needed_element) {
        console.log("NO_SUCH_ELEMENT");
        break;
    };
};

// Merge Sort
let array = [4,1,9,3,9,8,0,12,87,45,98,34,24,54,99,20];
const func = array => {
    if(array.length > 1) {
        middleElement = Math.floor(array.length/2);

        let leftPart = array.slice(0, middleElement);
        
        let rightPart = array.slice(middleElement, array.length);
        
        func(leftPart);

        func(rightPart);

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
    return array;
}
