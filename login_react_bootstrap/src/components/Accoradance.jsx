import data from "../assets/data.json";
import "../App.css";
import { useState } from "react";
import { motion } from "framer-motion";
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
              <motion.div
                key={id}
                transition={{ delay: 0.3 * id }}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                exit={{ opacity: 0, y: 20 }}
                // whileHover={{ scale: 1.1 }}
                // whileTap={{ scale: 0.9 }}>
                onClick={
                  multiSelectd
                    ? () => handleMultiSelect(id)
                    : () => handleSelected(id)
                }
                className="flex_content"
              >
                <div className="question_flex">
                  <h5 className="question">{value.question}</h5>
                  <span>+</span>
                </div>
                {multiSelectd ? (
                  multiSelectArray.indexOf(value.id - 1) !== -1 && (
                    <p key={id} className="details_paragraph">
                      {value.details}
                    </p>
                  )
                ) : value.id - 1 === selected ? (
                  <p key={id} className="details_paragraph">
                    {value.details}
                  </p>
                ) : null}
              </motion.div>
            </>
          );
        })}
      </div>
    </div>
  );
};
