import React from "react";
import Counter from "./counter"

function Counters(props) {
    const { counters, onIncrement, onDecrement, onReset, onDelete } = props;
    return (
        <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter => 
            <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete} />
            )}
        </div>
    );
}

export default Counters;