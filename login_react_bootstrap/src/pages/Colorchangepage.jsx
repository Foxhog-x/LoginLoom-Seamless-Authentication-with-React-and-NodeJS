export const Colorchangepage = () => {
  let rgbArray = [];
  const rgbColorChange = () => {
    rgbArray.splice(0, rgbArray.length);
    for (let i = 0; i < 3; i++) {
      const randomNo = Math.random(0, 10);
      rgbArray.push(Math.floor(randomNo * 255));
    }

    settingColor(rgbArray);
  };
  const settingColor = (...rgbArray) => {
    document.body.style = `background: rgb(${rgbArray.toString()})`;
  };

  return (
    <div style={{ display: "flex", gap: "35px", justifyContent: "center" }}>
      <button onClick={() => rgbColorChange()}>RGB color</button>
      <button>Random color</button>
      <button>HEX Color</button>
    </div>
  );
};
