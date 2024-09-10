import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset,incrementByAmount } from './redux/counterslice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Sélectionne la valeur du compteur
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(70.5))}>incrementByAmount</button>

    </div>
  );
};

export default Counter;
