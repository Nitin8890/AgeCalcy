import React, { useState } from "react";

const AgeCalculator = () => {
    const [years,setYears] = useState(0);
    const [months,setMonths] = useState(0);
    const [days,setDays] = useState(0);
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const [z,setZ] = useState(0)
    const calculateAge=(dob)=>{
        const d = new Date()
        const d2 = new Date(z,y-1,x)

        let ageyear = d.getUTCFullYear()-d2.getFullYear()
        let agemonth = d.getMonth()-d2.getMonth()
        let ageday = d.getDate()-d2.getDate()
        if (ageday < 0) {
            ageday += new Date(d.getFullYear(), d.getMonth(), 0).getDate();
            agemonth--;
          }
      
          if (agemonth < 0) {
            agemonth += 12;
            ageyear--;
          }
        setYears(ageyear)
        setMonths(agemonth)
        setDays(ageday)
    }
  return (
    <div className="h-screen w-screen bg-slate-50 flex justify-center items-center">
      <div className="border-2 border-black h-96 w-96 rounded-br-3xl">
      
        <form className="flex justify-around items-center mt-4">
          <div className="grid">
            <label className="text-xs">DAY</label>
            <input value={x} onChange={(e)=>{setX(Number(e.target.value))}} className="h-10 w-20 border-2 rounded-md hover:border-purple-500" />
          </div>
          <div className="grid">
            <label className="text-xs">MONTH</label>
            <input value={y} onChange={(e)=>{setY(Number(e.target.value))}} className="h-10 w-20 border-2 rounded-md hover:border-purple-500" />
          </div>
          <div className="grid">
            <label className="text-xs">YEAR</label>
            <input value={z} onChange={(e)=>{setZ(Number(e.target.value))}} className="h-10 w-20 border-2 rounded-md hover:border-purple-500" />
          </div>
         
        </form>

        <div className="flex justify-evenly mt-4 p-2">
          <hr className=" mt-7 bg-black w-full"></hr>
          <button onClick={calculateAge} className="rounded-full bg-purple-700 p-5">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#FFFFFF"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
        
          </button>
        </div>
        <div className="grid p-5">
          <div className="flex">
            <h1 className="text-purple-700 text-6xl">{years}</h1>
            <p className="text-6xl italic">years</p>
          </div>
          <div className="flex">
            <h1 className="text-purple-700 text-6xl">{months}</h1>
            <p className="text-6xl italic">months</p>
          </div>
          <div className="flex">
            <h1 className="text-purple-700 text-6xl">{days}</h1>
            <p className="text-6xl italic">days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
