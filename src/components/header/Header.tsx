import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

const Header = () => {
   const [count, setCount] = useState<number>(0);
   const [searchValue, setSearchValue] = useState<string>("");

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      let formData = new FormData(event.target as HTMLFormElement);
      let body = Object.fromEntries(formData);

      console.log(body);

      (event.target as HTMLFormElement).reset();
   };

   const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      console.log(e.currentTarget.innerHTML);
   };

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
   };

   return (
      <div>
         <h2>
            Header {count} {searchValue}
         </h2>
         <button onClick={() => setCount((p) => p + 1)}>increment</button>

         <input type='search' onChange={handleChange} value={searchValue} />

         <form onSubmit={handleSubmit} action=''>
            <input name='fname' type='text' />
            <input name='lname' type='text' />
            <input name='username' type='text' />
            <input name='parol' type='password' />
            <button>submit</button>
         </form>
         <button onClick={handleClick}>1</button>
         <button onClick={handleClick}>2</button>
         <button onClick={handleClick}>3</button>
      </div>
   );
};

export default React.memo(Header);
