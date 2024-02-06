/* eslint-disable react/prop-types */
import { useState } from "react";
import "./fileupload.css";

import { ToastNotification } from "../components/ToastNotification";
export const Fileupload = ({
  showToast,
  toastData,
  toastColor,
  setShowToast,
  setToastData,
  setToastColor,
}) => {
  const [fileList, setFileList] = useState([]);

  // const dateTimeFunction = async (datetime) => {
  //   const newTime = (await Date.now()) - datetime;
  //   console.log(newTime, "sdfsd");
  //   setTime(newTime);
  // };

  const toggleShowA = () => {
    setShowToast(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append("file", fileList[i]);
    }

    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    }).then((res) =>
      res.json().then((data) => {
        setShowToast(true);

        setTimeout();
        switch (data.status) {
          case 413:
            setToastData(data.message);
            setToastColor("text-danger");
            break;
          case 429:
            setToastData(data.message);
            setToastColor("text-danger");
            break;
          case 422:
            setToastData(data.message);
            setToastColor("text-danger");
            break;
          case 201:
            setToastData("File Save Successfully");
            setToastColor("text-success");
            break;
          default:
            setToastData("Something Else is wrong");
            setToastColor("text-danger");
            break;
        }
      })
    );
  };
  const handleFileChange = (e) => {
    console.log(e.target.files);
    const files = e.target.files;

    setFileList(files);
  };

  return (
    <div style={{ display: "grid", placeContent: "center", height: "100vh" }}>
      <h1>File Uploading</h1>
      <div className="form_div_fileupload">
        <form id="upload_form" action="Post">
          <input
            type="file"
            multiple
            name="file"
            id="file"
            onChange={(e) => {
              handleFileChange(e);
            }}
          />
          {/* <p>upload size less than 2MB</p> */}

          <button className="btn_submit" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>

      <ToastNotification
        showToast={showToast}
        toastData={toastData}
        toastColor={toastColor}
        toggleShowA={toggleShowA}
      />
      {/* <Toast show={showToast} onClose={toggleShowA}>
          <Toast.Header>
            <div className={toastColor}></div>
            <strong className="me-auto .bg-success">Notification</strong>
            <small>... min ago</small>
          </Toast.Header>
          <Toast.Body className={toastColor}>
            {toastData ? toastData : ""}
          </Toast.Body>
        </Toast> */}
    </div>
  );
};
