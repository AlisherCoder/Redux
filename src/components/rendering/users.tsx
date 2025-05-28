import React, { FC } from "react";
import { IUser } from "../../types";
import ImgMediaCard from "../card/Card";

interface Props {
   data: IUser[] | undefined;
}

const Electronics: FC<Props> = ({ data }) => {
   return (
      <div>
         <div className='container mx-auto my-5 grid grid-cols-4 gap-2.5'>
            {data?.map((item) => (
               <ImgMediaCard key={item.id} item={item} />
            ))}
         </div>
      </div>
   );
};

export default React.memo(Electronics);
