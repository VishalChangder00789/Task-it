import React, { useState } from "react";
import "./ImageButton.css";

const ImageButton = ({ imageSource, setValue, value }) => {
  const [addStyle, setAddStyle] = useState(false);
  const handleSetValue = () => {
    setValue(!value);
    setAddStyle(!addStyle);
  };

  return (
    <div
      onClick={handleSetValue}
      className={`ImageButtonContainer ${
        addStyle ? "ImageButtonContainer_imageClicked" : ""
      }`}
    >
      <img className="ImageButtonContainer_image" src={imageSource} />
    </div>
  );
};

export default ImageButton;
