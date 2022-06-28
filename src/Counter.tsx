import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' }   //이렇게 액션을 연달아 나열

const reducer = (state: number, action: Action): number => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }

}

const Counter = () => {
    //Generics 알아서 유추하기때문에 생략해도 무방
    //제네릭은 null일수도 있고 아닐수도 있는 상황에서 사용하면 좋음!
    //ex const [info,setInformation] = useState<Information | null> (null);
    // const [count, setCount] = useState<number>(0);
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ type: 'INCREASE' });
    const onDecrease = () => dispatch({ type: 'DECREASE' });
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter;