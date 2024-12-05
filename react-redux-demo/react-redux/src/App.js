import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import {increment, decrement} from './modules/counterSlice'

function App(){
  const count = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch();
  return (
    <div>
    <button onClick={()=>dispatch(increment())}>Add</button>
    <h2>{count}</h2>
    <button onClick={()=>dispatch(decrement())}>Decrece</button>
    </div>
  )
}

export default App;