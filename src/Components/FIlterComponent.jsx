import search from "../assets/search.svg";
import One from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import four from "../assets/4.svg";
import five from "../assets/5.svg";
import six from "../assets/6.svg";
import seven from "../assets/seven.svg";
import eight from "../assets/eight.svg";
import nine from "../assets/nine.svg";
import ten from "../assets/ten.svg";
import eleven from "../assets/eleven.svg";
import { useState } from "react";

const FIlterComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [showClearIcon, setShowClearIcon] = useState(false);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setShowClearIcon(true);
  };

  const handleClearClick = () => {
    setSelectedFilter("");
    setShowClearIcon(false);
  };
  return (
    <div className="filter rounded ">
      <div className="w-full">
        <h3 className="text-center mt-5 text-3xl text-white">Filters</h3>
      </div>

      <div className="mt-2 w-full p-3">
        <div className="text-white flex items-center justify-between w-full">
          <p className="text-gray-400 text-sm">Filters Applied</p>
          {showClearIcon && (
            <p className="text-gray-50 text-base" onClick={handleClearClick}>
              Clear All
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            value={selectedFilter}
            className={`w-full p-3 bg-[#333] rounded text-[#53ACFF] font-normal text-[12px]`}
            readOnly
          />
        </div>
      </div>

      <div className="w-full p-2">
        <span className="text-white font-semibold text-[15px]">stock</span>
        <div className="w-full relative">
          <input
            type="text"
            placeholder="$ tICKER"
            className="px-2 py-1 w-full bg-[#333] rounded "
          />
          <img
            src={search}
            alt=""
            className="absolute w-4 right-[10px] top-[20%]"
          />
        </div>
      </div>

      <div className="flex items-center p-1 mt-2 justify-evenly text-white text-sm font-light w-full">
        <div className="border-l p-2">
          <p
            className="flex item-center gap-2"
            onClick={() => handleFilterClick("Health care")}
          >
            <img src={One} alt="" />
            Health care
          </p>
          <p
            className="flex item-center gap-2"
            onClick={() => handleFilterClick("Materials")}
          >
            <img src={two} alt="" />
            Materials
          </p>
          <p
            className="flex item-center gap-2"
            onClick={() => handleFilterClick("Energy")}
          >
            <img src={three} alt="" />
            Energy
          </p>
          <p
            className="flex item-center gap-2 text-[12px]"
            onClick={() => handleFilterClick("Consumer discretionary")}
          >
            <img src={four} alt="" />
            Consumer discretionary
          </p>
          <p
            className="flex item-center gap-2"
            onClick={() => handleFilterClick("Consumer staples")}
          >
            <img src={five} alt="" />
            Consumer staples
          </p>
          <p
            className="flex item-center gap-2"
            onClick={() => handleFilterClick("Real estate")}
          >
            <img src={six} alt="" />
            Real estate
          </p>
        </div>
        <div className="border-l p-1">
          <p
            className="flex item-center gap-2"
            onClick={() => handleFilterClick("IT")}
          >
            <img src={seven} alt="" />
            IT
          </p>
          <p
            className="flex item-center gap-2"
            onClick={() => handleFilterClick("Communication")}
          >
            <img src={eight} alt="" />
            Communication
          </p>
          <p
            className="flex item-center gap-2"
            onClick={() => handleFilterClick("Industrials")}
          >
            <img src={nine} alt="" />
            Industrials
          </p>
          <p
            className="flex item-center gap-2"
            onClick={() => handleFilterClick("Utilities")}
          >
            <img src={ten} alt="" />
            Utilities
          </p>
          <p
            className="flex item-center gap-2"
            onClick={() => handleFilterClick("Financials")}
          >
            <img src={eleven} alt="" />
            Financials
          </p>
        </div>
      </div>

      <div className="flex w-full justify-between p-4">
        <div className="flex flex-col">
          <h3 className="text-white font-medium ">Market Cap</h3>
          <div className="text-white font-light flex gap-2">
            <input type="radio" id="Micro" name="marketCap" value="Micro" />
            <label htmlFor="Micro">Micro</label>
          </div>
          <div className="text-white font-light flex gap-2">
            <input type="radio" id="Small" name="marketCap" value="Small" />
            <label htmlFor="Small">Small</label>
          </div>
          <div className="text-white font-light flex gap-2">
            <input
              type="radio"
              id="Large"
              name="marketCap"
              value="Large"
              className="text-[#333] border-[#333]"
            />
            <label htmlFor="Large">Large</label>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3 className="text-white font-medium ">Risk Level</h3>
            <div className="text-white font-light flex gap-2">
              <input
                type="radio"
                id="LowRisk1"
                name="riskLevel"
                value="Low Risk"
              />
              <label htmlFor="LowRisk1">Low Risk</label>
            </div>
            <div className="text-white font-light flex gap-2">
              <input
                type="radio"
                id="LowRisk2"
                name="riskLevel"
                value="Low Risk"
              />
              <label htmlFor="LowRisk2">Low Risk</label>
            </div>
            <div className="text-white font-light flex gap-2">
              <input
                type="radio"
                id="LowRisk3"
                name="riskLevel"
                value="Low Risk"
                className="text-[#333] border-[#333]"
              />
              <label htmlFor="LowRisk3">Low Risk</label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-3 items-center justify-between p-4 w-full text-[#888]">
        <div>
          <h3 className="text-white mb-2">strategy</h3>
          <div className="text-sm flex flex-col items-center justify-center ">
            <p>Big Option Buys</p>
            <p className="bg-[#53ACFF] text-white  p-2 rounded">
              Merger Arbitrage
            </p>
            <p>Short Reports</p>
          </div>
        </div>
        <div>
          <h3 className="text-white mb-2">asset</h3>
          <div className="text-sm flex flex-col items-center justify-center">
            <p>Stocks</p>
            <p className="bg-[#53ACFF] text-white p-2 m-2 rounded">Options</p>
            <p>Futures</p>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center mt-3">
        <button className="bg-[#53ACFF] text-white p-2 w-40 rounded">
          Apply
        </button>
      </div>
    </div>
  );
};

export default FIlterComponent;
