import { GoDot } from "react-icons/go";
const AboutUs = () => {
  return (
    <div className="bg-[#ECF8F5] mt-10">
      <div className="max-w-[1140px] h-screen mx-auto pt-10 ">
        {/* main container  */}
        <div className="flex justify-between items-center gap-6">
          {/* 1st section  */}
          <div className="w-[50%] bg-white rounded-lg p-10">
            <h3 className="text-xl text-secondaryColor font-WorkSanser font-medium">
              About us
            </h3>
            <h3 className="text-[40px] text-[#111322] font-WorkSanser font-bold">
              Aspired To Build A Better Financial World
            </h3>
            <p className="text-[16px] font-WorkSanser font-normal">
              Raqamyah is a Sharia-compliant crowdlending platform licensed by
              the Saudi Central Bank (SAMA). It connects SMEs seeking financing
              with investors looking for competitive returns. By directly
              funding SMEs, investors earn profits while supporting business
              growth and economic development. The platform’s mission is to
              simplify and accelerate funding for small businesses to help them
              thrive.
            </p>
            <div className="pt-4 space-y-4">
              <h3 className="flex items-center text-[16px] font-WorkSanser gap-2">
                <span className="text-secondaryColor">
                  {" "}
                  <GoDot className="text-green-700" />
                </span>
                Sharia-Compliant Crowdlending
              </h3>
              <h3 className="flex items-center text-[16px] font-WorkSanser gap-2">
                <span className="text-secondaryColor">
                  {" "}
                  <GoDot className="text-green-700" />
                </span>
                Empowering Business Growth
              </h3>
              <h3 className="flex items-center text-[16px] font-WorkSanser gap-2">
                <span className="text-secondaryColor">
                  {" "}
                  <GoDot className="text-green-700" />
                </span>
                Direct Investment Opportunities
              </h3>
              <h3 className="flex items-center text-[16px] font-WorkSanser gap-2">
                <span className="text-secondaryColor">
                  {" "}
                  <GoDot className="text-green-700" />
                </span>
                Regulated and Trusted
              </h3>
            </div>
          </div>
          {/* 2nd section  */}
          <div className="w-[50%] bg-white rounded-lg p-10">2nd section</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
