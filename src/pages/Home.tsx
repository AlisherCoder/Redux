import React from "react";
import Electronics from "../components/rendering/users";
import { useGetUsersQuery } from "../redux/api/user.api";

const Home = () => {
   // const [data, setData] = useState<null | IPayload>(null);

   // useEffect(() => {
   //    axios.get("https://dummyjson.com/recipes").then((res) => {
   //       setData(res.data);
   //    });
   // }, []);

   // const dispatch = useDispatch();

   // const students = useSelector((state: RootState) => state.studentSlice);

   const { data } = useGetUsersQuery({ order: "asc" });

   return (
      <div>
         <Electronics data={data} />
      </div>
   );
};

export default React.memo(Home);
