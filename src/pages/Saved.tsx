import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import Electronics from "../components/electronics/Electronics";

const Saved = () => {
   const wishlistData = useSelector((state: RootState) => state.electronics.wishlist);
   console.log(wishlistData);

   return (
      <div>
         <Electronics data={wishlistData} />
      </div>
   );
};

export default React.memo(Saved);
