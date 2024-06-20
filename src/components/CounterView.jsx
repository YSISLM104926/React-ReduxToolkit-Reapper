import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../features/counterSlice'

export const CounterView = () => {
    const count = useSelector(state => state.counterRe.count)
    console.log(count)
    const dispatch = useDispatch();
    return (
        <div>
              <h1>count : {count}</h1>
              <button onClick={()=>dispatch(increment())} className='btn btn-primary'>increment</button>
              <button onClick={()=>dispatch(decrement())} className='btn btn-primary'>decrement</button>
              <button onClick={()=>dispatch(reset())} className='btn btn-primary'>reset</button>
        </div>
    )
}