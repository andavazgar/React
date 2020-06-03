import React from 'react';

class Counter extends React.Component {
    render() {
        const { counter, onIncrement, onDecrement, onDelete } = this.props;

        return (
            <div>
                <span style={{width: 40}} className={this.getBadgeClassses()}>{this.formatValue()}</span>
                <button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm">+</button>
                <button onClick={() => onDecrement(counter)} className="btn btn-secondary btn-sm m-2">-</button>
                <button onClick={() => onDelete(counter)} className="btn btn-danger btn-sm">Delete</button>
            </div>
        );
    }

    getBadgeClassses() {
        const { value } = this.props.counter;

        let classToApply = "m-2 badge badge-";
        classToApply += value === 0 ? "warning" : "primary";
        return classToApply;
    }

    formatValue() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;