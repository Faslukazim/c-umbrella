import React, { useState } from "react";
import "../Main.css";

function Main() {
  // state variables for the umbrella color, logo, uploaded file, rotation, and loading status
  const [state, setState] = useState("Blue");
  const [logo, setLogo] = useState("");
  const [file, setFile] = useState(null);
  const [rotation, setRotation] = useState(true);
  const [loading, setLoading] = useState(false);

  // function to display loading animation
  const loader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  // function to handle file input and set the logo state
  const imageUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result);
    };
    reader.readAsDataURL(file);
    console.log(file);
  };

  return (
    <>
      <div className="main">
        {loading ? (
          <div className="leftloader">
            {/* display loading animation */}
            <img
              className="loader"
              style={{
                animation: "loader-spin infinite 2s linear",
              }}
              src="/images/loader_icon.svg"
              alt=""
            />
          </div>
        ) : (
          <div className="left">
            {/* display umbrella image */}
            <img
              className="Umbrella"
              style={{
                animation: rotation
                  ? "Umbrella-spin infinite 20s linear"
                  : "none",
              }}
              src={`/images/${state}umbrella.png`}
              alt=""
            />
            {/* display logo */}
            <div className="logodiv">
              <img className="logo" src={logo} alt="" />
            </div>
          </div>
        )}
        <div className="right">
          <div className="menu">
            <h1 className="mainh1">Custom Umbrella</h1>
            {/* color picker */}
            <fieldset class="swatch-picker">
              <label>
                <input
                  onClick={() => {
                    setState("Blue");
                  }}
                  onChange={loader}
                  type="radio"
                  name="swatch_1234"
                  value="Blue"
                />
                <span style={{ backgroundColor: "rgb(48 179 229)" }}>Blue</span>
              </label>
              <label>
                <input
                  onClick={() => {
                    setState("Yellow");
                  }}
                  onChange={loader}
                  type="radio"
                  name="swatch_1234"
                  value="Yellow"
                />
                <span style={{ backgroundColor: "rgb(254 212 80)" }}>
                  Yellow
                </span>
              </label>
              <label>
                <input
                  onClick={() => {
                    setState("Pink");
                  }}
                  onChange={loader}
                  type="radio"
                  name="swatch_1234"
                  value="Pink"
                />
                <span style={{ backgroundColor: "rgb(218 58 143)" }}>Pink</span>
              </label>
            </fieldset>
            <h3 className="mainh2">Customize your umbrella</h3>
            <p className="mainh2">Upload a logo for an instant preview</p>
            <p className="mainh2">
              .png and jpg files only.Max file size is 5MB
            </p>

            <div class="upload-btn-wrapper">
              <button class="uploadbtn">
                <img
                  className="uploadicon"
                  src="/images/upload_icon.svg"
                  alt=""
                />
                <p className="uploadtext">Upload Logo</p>
              </button>
              <input
                onClick={() => {
                  setRotation(false);
                }}
                onChange={imageUpload}
                type="file"
                name="myfile"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
