import React, { FormEvent, useState } from "react";
import { IBook } from "../../types";
import { useChange } from "../../hooks/useChange";

const initialState: IBook = {
   author: "",
   title: "",
   id: null,
};

const Book = () => {
   const { formData, handleChange, setFormData } = useChange<IBook>(initialState);
   const [data, setData] = useState<IBook[]>([]);

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let newBook = {
         ...formData,
         id: new Date().getTime(),
      };

      setData((p) => [...p, newBook]);
      setFormData(initialState);
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input name='author' value={formData.author} onChange={handleChange} type='text' />
            <input name='title' value={formData.title} onChange={handleChange} type='text' />
            <button>Submit</button>
         </form>
         <div>
            {data?.map((item: IBook) => (
               <div key={item.id}>
                  <h3>{item.author}</h3>
                  <p>{item.title}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default React.memo(Book);
