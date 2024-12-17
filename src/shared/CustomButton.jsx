import React from 'react';

const CustomButton = ({text}) => {
    return (
        
             <div>
              <button className="bg-primaryColor hover:bg-[#3FB49B] text-white rounded-full md:text-[16px] font-WorkSanser font-medium px-2 md:px-6 py-3 md:py-3">{text}</button>
        </div>
       
    );
};

export default CustomButton
            