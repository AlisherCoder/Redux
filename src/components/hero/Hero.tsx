import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import { decrement, inc, incrementByAmount } from "../../redux/features/counter.slice";

// useSelector - get
// useDipatch - set

const Hero = () => {
   const count = useSelector((state: RootState) => state.counter.value);
   const dispatch = useDispatch();

   return (
      <div>
         <h2>Hero {count}</h2>
         <button onClick={() => dispatch(inc())}>increment</button>
         <button onClick={() => dispatch(decrement())}>decrement</button>
         <button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</button>
      </div>
   );
};

export default React.memo(Hero);
