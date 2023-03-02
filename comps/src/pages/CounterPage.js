// import useCounter from '../hooks/use-counter';
import { useState, useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change-value-to-add';


function CounterPage({ initialCount }) {
    // const { count, Increment } = useCounter(initialCount);
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const reducer = (state, action) => {
        // Whatever gets returned will be the new state

        if (action.type === INCREMENT_COUNT) {
            return {
                ...state,
                count: state.count + 1,
            }
        }

        if (action.type === SET_VALUE_TO_ADD) {
            return {
                ...state,
                valueToAdd: action.payload,
            }
        }

        return state;

    };

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    });


    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });

        // setValueToAdd(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    };

    const increment = () => {
        // setCount(count + 1);
        dispatch({
            type: INCREMENT_COUNT
        });
    };
    const decrement = () => {
        // setCount(count - 1);
    };


    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input
                    value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;