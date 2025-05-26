import React from "react";

// useSelector - get
// useDipatch - set

const Hero = () => {
   // const [state, dispatch] = useStateValue()
   //  const count = useSelector((state: RootState) => state.counter.value);
   //  const dispatch = useDispatch();

   return (
      <div>
         <h2>Hero</h2>
         {/* <button onClick={()=> dispatch({type:"INC", payload: 5})}>increment</button> */}
         {/* <button onClick={() => dispatch(inc())}>increment</button>
         <button onClick={() => dispatch(decrement())}>decrement</button>
         <button onClick={() => dispatch(incrementByAmount(5))}>incrementByAmount</button> */}
      </div>
   );
};

export default React.memo(Hero);
