import React from 'react';

const CustomDivider = ({text}) => {
    return (
        <div>
             <h1 className='text-xl text-[#606a8c] font-WorkSanser font-medium'>{text}</h1>
             <div className="divider"></div>
        </div>
    );
};

export default CustomDivider;          