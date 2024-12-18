import { rectangle1, rectangle2 } from "@/assets/images";
import Image from "next/image";

const LeftSide = () => {
    return (
        <div className="flex items-center gap-6">
            <Image className="w-64" src={rectangle1} alt="rectangle1"/>
            <Image className="w-64 mt-20" src={rectangle2} alt="rectangle2"/>
            
        </div>
    );
};

export default LeftSide;