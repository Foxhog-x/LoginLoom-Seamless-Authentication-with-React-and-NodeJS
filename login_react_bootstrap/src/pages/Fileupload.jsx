import { useState } from "react";
import "./fileupload.css";
export const Fileupload = () => {
  const [file, setFile] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    });
  };
  const handleFileChange = (e) => {
    console.log(e.target.files);
    const files = e.target.files;
    setFile(files[0]);
  };

  return (
    <div style={{ display: "grid", placeContent: "center", height: "100vh" }}>
      <h1>File Uploading</h1>
      <div className="form_div_fileupload">
        <form id="upload_form" action="Post">
          <input
            type="file"
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
    </div>
  );
};
