import React from "react";
import { FaRegCalendarAlt, FaRegChartBar, FaStickyNote, FaTachometerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {

  

  return (
    <div className="bg-[#4E73DF] px-[25px] h-screen ">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          Teacher panel
        </h1>
      </div>
      <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer">
        <FaTachometerAlt color="white" />
        <Link to={"/Dashboard"} className="text-[14px] leading-[20px] font-bold text-white">
          Dashboard
        </Link>
      </div>
     
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaStickyNote color="white" />{" "}
            <Link to={"/Reviews"} className="text-[14px] leading-[20px] font-normal text-white">
              Reviews
            </Link>
          </div>
        </div>

          
            <div className="flex items-center gap-[10px] py-[15px] cursor-pointer">
              <FaRegChartBar color="white" />{" "}
              <Link to={"/ViewResult"} className="text-[14px] leading-[20px] font-normal text-white">
                Result
              </Link>
            </div>
            <div className="flex items-center gap-[10px] py-[15px] cursor-pointer">
              <FaRegCalendarAlt color="white" />{" "}
              <Link to={"/AddQuiz"} className="text-[14px] leading-[20px] font-normal text-white">
                AddQuiz
              </Link>
            </div>
            <div className="flex items-center gap-[10px] py-[15px] cursor-pointer">
              <FaRegCalendarAlt color="white" />{" "}
              <Link to={"/ViewQuiz"} className="text-[14px] leading-[20px] font-normal text-white">
                ViewQuiz
              </Link>
            </div>
          
    
      </div>
      </div>
     
  );
}


export default Sidebar;
