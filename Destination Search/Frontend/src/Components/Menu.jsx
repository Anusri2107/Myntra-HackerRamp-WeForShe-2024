import React, { useEffect, useState } from "react";
import Maharashtra from "./Maharashtra";
import Gujarat from "./Gujarat";
import Rajasthan from "./Rajasthan";
import Assam from "./Assam";
import JammuKashmir from "./JammuKashmir";
import WestBengal from "./WestBengal";
import TamilNadu from "./TamilNadu";

function Menu() {
  const [place, setPlace] = useState("");

  const [rajasthan, setRajasthan] = useState(false);
  const [maharashtra, setMaharashtra] = useState(false);
  const [gujarat, setGujarat] = useState(false);
  const [jammuKashmir, setJammuKashmir] = useState(false);
  const [assam, setAssam] = useState(false);
  const [westBengal, setWestBengal] = useState(false);
  const [tamilNadu, setTamilNadu] = useState(false);

  useEffect(() => {
    console.log(place);
    place === "Rajasthan" ? setRajasthan(true) : setRajasthan(false);
    place === "Maharashtra" ? setMaharashtra(true) : setMaharashtra(false);
    place === "Gujarat" ? setGujarat(true) : setGujarat(false);
    place === "Jammu & Kashmir" ? setJammuKashmir(true) : setJammuKashmir(false);
    place === "Assam" ? setAssam(true) : setAssam(false);
    place === "West Bengal" ? setWestBengal(true) : setWestBengal(false);
    place === "Tamil Nadu" ? setTamilNadu(true) : setTamilNadu(false);
  }, [place]);

  const options = [
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Jammu & Kashmir", value: "Jammu & Kashmir" },
    { label: "Assam", value: "Assam" },
    { label: "West Bengal", value: "West Bengal" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
  ];

  const handleOnChange = (e) => {
    setPlace(e.target.value);
  };

  return (
    <div className="px-5 lg:px-10 xl:px-20">
      {/* <Select name="select" options={options} value={place} onChange={handleOnChange}></Select> */}
      <div className="w-1/4 mt-4 rounded-sm ring-2 ring-slate-200">
        <select
          value={place}
          onChange={handleOnChange}
          className="bg-transparent w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-500"
        >
            <option value="" disabled selected hidden>Select your state</option>
          {options.map((op) => (
            <option value={op.value}>{op.label}</option>
          ))}
        </select>
      </div>
        {rajasthan && <Rajasthan/>}
        {maharashtra && <Maharashtra/>}
        {gujarat && <Gujarat/>}
        {jammuKashmir && <JammuKashmir/>}
        {assam && <Assam/>}
        {westBengal && <WestBengal/>}
        {tamilNadu && <TamilNadu/>}
        {/* {maharashtra && <Container place={"Maharashtra"}/>} */}
    </div>
  );
}

export default Menu;
