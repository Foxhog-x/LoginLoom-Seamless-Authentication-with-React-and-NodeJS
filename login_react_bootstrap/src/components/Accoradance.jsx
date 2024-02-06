import data from "../assets/data.json";
import "../App.css";
import { useState } from "react";
export const Accoradance = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelectd, setMultiSelected] = useState(false);
  const [multiSelectArray, setMultiSelecteArray] = useState([]);
  console.log(multiSelectArray);

  const handleMultiSelectBtn = () => {
    multiSelectd !== true ? setMultiSelected(true) : setMultiSelected(false);
  };

  const handleSelected = (getId) => {
    getId === selected ? setSelected(null) : setSelected(getId);
  };

  const handleMultiSelect = (getId) => {
    let copyMultiSelectArray = [...multiSelectArray];
    const indexOfSelected = copyMultiSelectArray.indexOf(getId);
    if (indexOfSelected === -1) {
      copyMultiSelectArray.push(getId);
    } else {
      copyMultiSelectArray.splice(indexOfSelected, 1);
    }
    setMultiSelecteArray(copyMultiSelectArray);
  };

  console.log(multiSelectArray);
  return (
    <div className="bg_ground">
      <div className="accordance_center">
        <h1 className="accordance_h1">Accoradance</h1>
        <button onClick={() => handleMultiSelectBtn()} className="multiselect">
          MultiSelect
        </button>
        {data.map((value, id) => {
          return (
            <>
              <div
                onClick={
                  multiSelectd
                    ? () => handleMultiSelect(id)
                    : () => handleSelected(id)
                }
                key={id}
                className="flex_content"
              >
                <div className="question_flex">
                  <h2 className="question">{value.question}</h2>
                  <span>+</span>
                </div>
                {multiSelectd ? (
                  multiSelectArray.indexOf(value.id - 1) !== -1 && (
                    <p className="details_paragraph">{value.details}</p>
                  )
                ) : value.id - 1 === selected ? (
                  <p className="details_paragraph">{value.details}</p>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
