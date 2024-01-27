import React from "react";
import "./StylePanel.css";

// Images
import boldImage from "../../assets/bold.png";
import italicImage from "../../assets/italic-font.png";
import underlineImage from "../../assets/underline-text.png";
import fontSizeImage from "../../assets/font-adjustment.png";
import colorPickerImage from "../../assets/LightMode/pallete.png";

// Component
import ImageButton from "../ImageButton/ImageButton";
import FontSelector from "../FontSelector/FontSelector";
import Status from "../Status/Status";
import ColorPicker from "../ColorPicker/ColorPicker";

const StylePanel = ({
  handleListCreated,
  bold,
  italic,
  underLine,
  setFontSize,
  setBold,
  setItalic,
  setUnderLine,
  setBackgroundColor,
  createTaskHandler,
  setTabBackgroundColor,
  updateTaskHandler,
  updateButton,
  setBackgroundColorEdit,
}) => {
  return (
    <div className="StylePanelContainer">
      <div className="StylePanelContainer_styles">
        <ImageButton imageSource={boldImage} setValue={setBold} value={bold} />
        <ImageButton
          imageSource={italicImage}
          setValue={setItalic}
          value={italic}
        />
        <ImageButton
          imageSource={underlineImage}
          setValue={setUnderLine}
          value={underLine}
        />

        <FontSelector imageSource={fontSizeImage} setFontSize={setFontSize} />

        <ColorPicker
          imageSource={colorPickerImage}
          setBackgroundColor={setBackgroundColor}
          setTabBackgroundColor={setTabBackgroundColor}
          setBackgroundColorEdit={setBackgroundColorEdit}
          updateButton={updateButton}
        />
      </div>

      <div className="StylePanelContainer_styles_button">
        <button onClick={handleListCreated}>Close</button>
        {!updateButton ? (
          <button onClick={createTaskHandler}>Create</button>
        ) : (
          <button onClick={updateTaskHandler}>Update</button>
        )}
      </div>
    </div>
  );
};

export default StylePanel;
