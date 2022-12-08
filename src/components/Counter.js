import React from 'react';

function Counter({number, diff, onIncrease, onDecrease, onSetDiff}) {

    const onChange = e => {
        console.log('change');
        //e.target.value은 문자열이라 숫자로 변환 필요
        //radix : 진법
        const number = parseInt(e.target.value, 10);
        onSetDiff(number);
    }

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;