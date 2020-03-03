import React from "react";

const OptionCard = ({options}) => {
  return (
    <div id="optioncardcontainer">
      <div class="content">
        <img src={options.image}/>
        <h2>{options.option}</h2>
        <button id="optionbutton">{options.play}</button>
      </div>
    </div>
  );
};
export default OptionCard;