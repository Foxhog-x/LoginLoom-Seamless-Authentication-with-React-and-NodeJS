import { useState } from "react";

export const Colorchangepage = () => {
  const [showColorType, setShowColorType] = useState("");
  const hexColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let allRgbArray = [];

  const checkArray = () => {
    if (typeof allRgbArray === "object") {
      allRgbArray.splice(0, allRgbArray.length);
    } else {
      allRgbArray = [];
    }
  };

  const rgbColorChange = (colorType) => {
    switch (colorType) {
      case "rgb":
        checkArray();
        for (let i = 0; i < 3; i++) {
          const randomNo = Math.random(0, 10);
          allRgbArray.push(Math.floor(randomNo * 255));
        }
        settingRgbColor("rgb", allRgbArray);
        break;

      case "hex":
        checkArray();
        for (let i = 0; i < 6; i++) {
          allRgbArray.push(hexColor[Math.floor(Math.random(0, 10) * 15)]);
        }
        allRgbArray = "#" + allRgbArray.join("").toString();
        settingRgbColor("hex", allRgbArray);

        break;
      default:
        break;
    }
  };
  const settingRgbColor = (colorType, ...allRgbArray) => {
    switch (colorType) {
      case "rgb":
        setShowColorType(`rgb ${allRgbArray.toString()}`);
        document.body.style = `background: rgb(${allRgbArray.toString()})`;
        break;

      case "hex":
        setShowColorType(`hex ${allRgbArray}`);
        document.body.style = `background: ${allRgbArray}`;
        break;
      default:
        break;
    }
  };
  console.log(showColorType);
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "35px",
          justifyContent: "center",
          padding: "12px",
          marginTop: "20px",
        }}
      >
        <button onClick={() => rgbColorChange("rgb")}>RGB color</button>
        <button onClick={() => rgbColorChange("hex")}>Hex color</button>
        <button>Color</button>
      </div>
      <div></div>
      <div
        style={{
          height: "80vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h1>{showColorType}</h1>
      </div>
    </>
  );
};
