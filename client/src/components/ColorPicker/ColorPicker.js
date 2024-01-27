import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = ({
  imageSource,
  setBackgroundColor,
  setTabBackgroundColor,
  updateButton,
  setBackgroundColorEdit,
}) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  const handleSelectorOpen = () => {
    setIsSelectorOpen(!isSelectorOpen);
  };

  const handleColorPicker = (color) => {
    if (updateButton) {
      setBackgroundColorEdit(color);
    } else {
      setBackgroundColor(color);
      setTabBackgroundColor(color);
    }
  };

  const myColors = [
    "#faafa8",
    "#f39f76",
    "#fff8b8",
    "#e2f6d3",
    "#b4ddd3",
    "#d4e4ed",
    "#aeccdc",
    "#d3bfdb",
    "#f6e2dd",
    "#e9e3d4",
    "#efeff1",
  ];

  return (
    <div onClick={handleSelectorOpen} className="ColorPickerContainer">
      <img src={imageSource} />
      {isSelectorOpen ? (
        <div className="ColorPickerDropdown">
          {myColors.map((ele) => {
            return (
              <div
                onClick={() => handleColorPicker(ele)}
                className="ColorPickerDropdown_item"
              >
                <div style={{ backgroundColor: `${ele}` }}></div>
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

export default ColorPicker;
