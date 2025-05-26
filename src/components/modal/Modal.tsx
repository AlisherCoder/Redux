import React from "react";
import "./style.css";

const Modal = () => {
   return (
      <div className='h-screen'>
         <div className='container mx-auto grid place-items-center'>
            <form action='' className='w-[300px] flex flex-col gap-1.5 p-4 shadow'>
               <div className='flex flex-col gap-1.5 text-[20px]'>
                  <label htmlFor=''>First name</label>
                  <input className='border rounded-[12px] border-gray-500' type='text' />
               </div>

               <div className='flex flex-col gap-1.5 text-[20px]'>
                  <label htmlFor=''>Last name</label>
                  <input className='border rounded-[12px] border-gray-500' type='text' />
               </div>

               <div className='flex flex-col gap-1.5 text-[20px]'>
                  <label htmlFor=''>Username</label>
                  <input className='border rounded-[12px] border-gray-500' type='text' />
               </div>

               <div className='flex flex-col gap-1.5 text-[20px]'>
                  <label htmlFor=''>Age</label>
                  <input className='border rounded-[12px] border-gray-500' type='number' />
               </div>

               <div className='flex justify-end gap-1 mt-2'>
                  <button className='border rounded-[12px] bg-blue-500 text-white px-2 py-1.5'>
                     Cancel
                  </button>

                  <button className='border rounded-[12px] bg-green-500 text-white px-2 py-1.5'>
                     Update
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default React.memo(Modal);
