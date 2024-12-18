import React from 'react';

const CustomButton2 = ({text}) => {
    return (
      
          <div>
               <button className="text-black rounded-full md:text-[16px] font-WorkSanser font-medium px-2 md:px-6 py-3 md:py-3 border border-primaryColor">
            {text}
          </button>
          </div>
      
    );
};

export default CustomButton2;