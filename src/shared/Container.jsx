import { twMerge } from "tailwind-merge";

const Container = ({ children }) => {
  return (
    <div className="max-w-[1120px] mx-auto px-4 lg:px-0">
      {children}
    </div>
  );
};

export default Container;
