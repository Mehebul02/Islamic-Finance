import Image from "next/image";

const CustomAbout = ({image,text}) => {
    return (
        
                <div>
                    <Image className="w-14" src={ image} alt="Lower Rates"/>
                    <h1 className="text-[18px] font-WorkSanser font-medium mt-2">{text}</h1>

                </div>

            
    );
};

export default CustomAbout;