import Container from "@/shared/Container";
import RightSide from "./RightSide";

const Solutions = () => {
  return (
    <div className="bg-[#ECF8F5]">
      <Container>
        {/* main container  */}
        <div className="flex justify-between ">
          {/* 1st section  */}
          <div className="w-[50%] bg-[#EFF1F5] p-10">
            <h1>1st section</h1>
          </div>
          {/* 2nd section  */}
          <div className="w-[50%] p-10">
         <RightSide/>
           
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Solutions;
