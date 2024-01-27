import React, { useState } from "react";
import "./FontSelector.css";

const FontSelector = ({ imageSource, setFontSize }) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const fontSizes = ["14px", "18px", "20px", "25px", "28px", "32px"];

  const handleSelectorOpen = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };

  const handleFontSizeSelection = (fontSize) => {
    setFontSize(fontSize);
  };

  return (
    <div onClick={handleSelectorOpen} className="FontSelectorContainer">
      <img src={imageSource} />
      {isSelectorOpen ? (
        <div className="FontSelectorDropdown">
          {fontSizes.map((fontSize) => {
            return (
              <div
                onClick={() => handleFontSizeSelection(fontSize)}
                className="FontSelectorDropdown_item"
              >
                {fontSize}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FontSelector;
