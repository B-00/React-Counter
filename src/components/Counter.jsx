import React from "react";

export default function Counter() {

    const [counter, setCounter] = React.useState(0);

    const addCounter = () => {
        setCounter(num => num + 1)
    }

    const subCounter = () => {
        setCounter(num => num - 1)
    }

    return (
        <div className="counter-container">
            <button className="btn-plus" onClick={addCounter}>+</button>
            <div className="counter">{counter}</div>
            <button className="btn-minus" onClick={subCounter}>-</button>
        </div>
    )
}