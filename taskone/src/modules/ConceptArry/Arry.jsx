import React from 'react'

export default function Arry() {

    // Q1 // Area of Circle
    const circleArea = (radius) => Math.PI * radius ** 2;

    // area of Rectangle
    const rectangleArea = (length, width) => length * width;

    //  area of Triangle
    const triangleArea = (base, height) => 0.5 * base * height;

    // Q2 find square & cube of array elements.
    let a = [1, 2, 3, 4, 5];
    const squareCube = a.map(num => ({ square: num ** 2, cube: num ** 3 }));

    // Q3 
    let b = [11, 22, 33, 44, 55]

    //Q4
    const numTo = 44;
    const find = b.includes(numTo);

    // Q5
    let d = [10, 20, 30, 40, 50];
    const sumArry = d.reduce((item, ind) => item + ind, 0);

    // Question 6
    let arr = [11, 22, 33, 44, 55];
    const even = arr.filter(num => num % 2 === 0);
    const odd = arr.filter(num => num % 2 !== 0);

    // Question 7
    const Leap = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Question 8
    let merged = [...a, ...b];

    // Question 9
    const student =
    {
        name: "Dhruval",
        age: 22,
        grade: "A"
    }

    // Q10
    const arrs = ["mango", "orange", "mango", "apple", "apple", "pineple", "apple"];
    const counts = {};
    arrs.forEach(e => {
        if (counts[e]) {
            counts[e]++;
        } else {
            counts[e] = 1;
        }
    });


    return (
        <>
            <ul>
                <h3>Q1: Find area.</h3>
                <br />
                <li>Area of Circle:- {circleArea(5)}</li><br />
                <li>Area of Rectangl:- {rectangleArea(5, 8)}</li><br />
                <li>Area of Tringle:-   {triangleArea(4, 5)}</li>
                <br /><br />
            </ul>

            <h3>Q2 : find square & cube of array elements.</h3>
            {squareCube.map((item, index) => (
                <li key={index}>Cube: {item.cube}, Square: {item.square}</li>
            ))
            }
            <br /><br />

            <h3>Q3: let b = [11,22,33,44,55] how to display records?</h3>
            {
                b.map((num, index) => (
                    <li key={index}>Index {index + 1}: {num}</li>
                ))
            }
            <br /><br />

            <h3>Q4:</h3>
            <li>{find ? `${numTo} is find` : `${numTo} is not find`}</li>
            <br />

            <h3>Q5: let a = [10,20,30,40,50] find sum of array</h3>
            <li>{sumArry}</li>

            <br />
            <h3>Q6:let arr = [11,22,33,44,55] find even & odd </h3>
            <li>Even No: {even}  </li>
            <li>Odd No:{odd}</li>
            <br />

            <h3>Q7:Find year is leap year or not?</h3>
            <li>2024 is Leap Year:- {Leap ? `Yes` : ` no`}</li>

            <br />
            <h3>Q8:Merge above two array a & arr.</h3>
            <li>Merg:- {merged}</li>


            <br />
            <h3>Q9: create student object & display students' information.</h3>
            <li>name: {student.name}</li>
            <li>age: {student.age}</li>
            <li>grade: {student.grade}</li>
          
            <br />
            <h3>Q10:let a= ["mango","orange","mango","apple",apple","pineple","apple"] count how many time elements are include in array.</h3>
            <ul>
                {Object.keys(counts).map((key, index) => (
                    <li key={index}>
                        {key}: {counts[key]}
                    </li>
                ))}
            </ul>
        </>
    )
}


