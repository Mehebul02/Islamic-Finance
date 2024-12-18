import Container from "@/shared/Container";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const Solutions = () => {
  return (
    <div className="bg-[#ECF8F5] pt-10">
      <Container>
        {/* main container  */}
        <div className="flex flex-col md:flex-row justify-between  ">
          {/* 1st section  */}
          <div className="flex justify-center md:items-center  w-[50%] bg-[#EFF1F5] md:mt-10 p-2">
           <LeftSide/>
          </div>
          {/* 2nd section  */}
          <div className="md:w-[50%] p-3 md:p-10">
         <RightSide/>
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Solutions;
