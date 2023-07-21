import React from "react";
import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import BarChart from "./Charts/BarChart";
import Barchart2 from "./Charts/Barchartr2";
import Piechart2 from "./Charts/Piechart2";
import PieCharts from "./Charts/PieCharts";

const Main = () => {
  return (
    <div className="px-[25px] pt-[25px] bg-[#F8F9FC] pb-[40px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[28px] leading-[34px] font-normal text-[#5a5c69] cursor-pointer">
          Dashboard
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-[30px] mt-[25px] pb-[15px]">
        <div className=" h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
              Total Students
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              254390
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        <div className=" h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#1CC88A] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#1cc88a] text-[11px] leading-[17px] font-bold">
              TOTAL STUDENTS PASSED
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              240
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>
      
        <div className=" h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#F6C23E] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
          <div>
            <h2 className="text-[#1cc88a] text-[11px] leading-[17px] font-bold">
              YOUR STUDENTS
            </h2>
            <h1 className="text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]">
              4400
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} />
        </div>
      </div>
      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]">
            <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
              Teacher's Overview
            </h2>
          </div>
          <div className="w-full">
           < BarChart/>
          </div>
        </div>
        <div className="basis-[30%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
              Revenue Resources
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-[35px]">
            <Piechart2/>
          </div>
        </div>
      </div>
      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
            Top Students
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="px-[25px] space-y-[15px] py-[15px]">
            <Barchart2/>
          </div>
        </div>
        <div className="basis-[45%] border bg-white shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-[#4e73df] text-[16px] leading-[19px] font-bold">
              Resources
            </h2>
            <FaEllipsisV color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-[35px] flex items-center justify-center h-[100%]">
            <div>
              <PieCharts/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
