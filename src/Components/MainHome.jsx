import first from "../assets/first.svg";
import second from "../assets/second.svg";
import third from "../assets/third.svg";
import four from "../assets/four.svg";
import { useState } from "react";

const MainHome = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedStocks, setSelectedStocks] = useState([]);

    const stocks = [
      {
        id: 1,
        name: "AMZN",
        icon: first,
        icon2: second,
        icon3: third,
        icon4: four,
        value: "200",
        change: "-0.25 %",
        risk: "Low Risk",
        additionalInfo: "AMZN ipsum dxxxxxxxxxxxxolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 2,
        name: "TSLA",
        icon: first,
        icon2: second,
        icon3: third,
        icon4: four,
        value: "200",
        change: "0.25 %",
        risk: "Low Risk",
        additionalInfo: "TSLA ipsum dolor wwwsit amet, consectetur adipiscing elit TSLA ipsum dolor wwwsit amet, consectetur adipiscing elit. TSLA ipsum dolor wwwsit amet, consectetur adipiscing elit.. ",
      },

      {
        id: 3,
        name: "NFLX",
        icon: first,
        icon2: second,
        icon3: third,
        icon4: four,
        value: "200",
        change: "-0.25 %",
        risk: "High Risk",
        additionalInfo: "NFLX ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 4,
        name: "PYPL",
        icon: first,
        icon2: second,
        icon3: third,
        icon4: four,
        value: "200",
        change: "0.25 %",
        risk: "High Risk",
        additionalInfo: "PYPL ipsum dolor sit amet, consectetur adipiscing elit TSLA ipsum dolor wwwsit amet, consectetur adipiscing elit. TSLA ipsum dolor wwwsit amet, consectetur adipiscing elit.. ",
      },


      {
        id: 5,
        name: "MSFT",
        icon: first,
        icon2: second,
        icon3: third,
        icon4: four,
        value: "200",
        change: "-0.25 %",
        risk: "High Risk",
        additionalInfo: "MSFT ipsum LOREM sit amet, consectetur adipiscing elit.",
      },
      {
        id: 6,
        name: "ABQQ",
        icon: first,
        icon2: second,
        icon3: third,
        icon4: four,
        value: "200",
        change: "0.25 %",
        risk: "High Risk",
        additionalInfo: "ABQQ ipsum dolor sit amet, consectetur adipiscing elit TSLA ipsum dolor wwwsit amet, consectetur adipiscing elit. TSLA ipsum dolor wwwsit amet, consectetur adipiscing elit.. ",
      },
    ];




const toggleDetails = (stock) => {
    setSelectedStocks(selectedStocks.includes(stock.id) ? selectedStocks.filter(id => id !== stock.id) : [...selectedStocks, stock.id]);
    setShowDetails(!showDetails);

  };

  return (
    <div className="header w-full max-md:w-screen mt-10 ml-10 max-md:ml-1 flex flex-col items-center max-md:p-0hg  p-3  justify-center ">
    {stocks.map((stock) => (
      <div key={stock.id} className={`flex w-full mt-4 flex-col  rounded bg-[#222] `}>

      <div  className={`flex w-full p-3 rounded ${showDetails && selectedStocks.includes(stock.id) ? 'bg-[#53ACFF]' : 'bg-[#222]'}`}>
      <div className="flex items-center cursor-pointer justify-between w-[25%]  border-r pr-4">
            <span
              className="flex gap-3 font-medium text-lg max-md:text-[12px] max-md:font-light   w-full justify-evenly max-md:p- text-white"
              onClick={() => toggleDetails(stock)}
            >
              <img  className="max-md:w-5" src={stock.icon} alt="" />
              <span className="">{stock.name}</span>
            </span>
          </div>

          <div className="flex items-center cursor-pointer justify-between w-[25%]  border-r pr-4">
            <span
              className="flex gap-3 font-medium text-lg max-md:text-[12px] max-md:font-light w-full justify-evenly  text-white"
              onClick={() => toggleDetails(stock)}
            >
              <img  className="max-md:w-5" src={stock.icon2} alt="" />
              <span className="">{stock.value}</span>
            </span>
          </div>

          <div className="flex items-center cursor-pointer justify-between w-[25%]  border-r pr-4">
            <span
              className="flex gap-3 font-medium text-lg max-md:text-[12px] max-md:font-light w-full justify-evenly max-md:p- text-white"
              onClick={() => toggleDetails(stock)}
            >
              <img  className="max-md:w-5" src={stock.icon3} alt="" />
              {stock.change === "-0.25 %" ? (
                <span className="text-[#D94111]">{stock.change}</span>
              ) : (
                <span className="text-[#118F4B]">{stock.change}</span>
              )}
            </span>
          </div>

          <div className="flex items-center cursor-pointer justify-between w-[25%]   ">
            <span
              className="flex gap-3 font-medium text-lg max-md:text-[12px] max-md:font-light w-full justify-evenly max-md:p- text-white"
              onClick={() => toggleDetails(stock)}
            >
              <img  className="max-md:w-5" src={stock.icon4} alt="" />
              <span className="">{stock.risk}</span>
            </span>
          </div>
        </div>

        {showDetails && selectedStocks.includes(stock.id) && (
          <div className="mt-4 w-full p-3">
            <p className="text-white">
              <strong > {stock.name}:</strong> {stock.additionalInfo}
            </p>
          </div>
        )}
      </div>
    ))}
  </div>
  )
}

export default MainHome