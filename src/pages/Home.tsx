import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import Electronics from "../components/electronics/Electronics";

const Home = () => {
   // const [data, setData] = useState<null | IPayload>(null);

   // useEffect(() => {
   //    axios.get("https://dummyjson.com/recipes").then((res) => {
   //       setData(res.data);
   //    });
   // }, []);

   // const dispatch = useDispatch();

   const students = useSelector((state: RootState) => state.studentSlice);

   return (
      <div>
         <Electronics data={students.value} />
      </div>
   );
};

export default React.memo(Home);
