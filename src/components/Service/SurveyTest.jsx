import React, { useState } from "react";
import info_icon from "../../images/info_icon.svg";
import bike_img from "../../images/bike_img.png";

export default function SurveyTest() {
  const [boxes, setBoxes] = useState([
    {
      id: 1,
      yes: false,
      no: false,
      executed: false,
      pointerEvents: "unset",
      opacity: 1,
    },
    {
      id: 2,
      yes: false,
      no: false,
      executed: false,
      pointerEvents: "none",
      opacity: 0.5,
    },
    {
      id: 3,
      yes: false,
      no: false,
      executed: false,
      pointerEvents: "none",
      opacity: 0.5,
    },
  ]);

  const handleCheckboxChange = (boxId, checkboxType) => {
    let newBoxes = [...boxes];

    if (checkboxType === "yes") {
      newBoxes[boxId - 1].yes = true;
      newBoxes[boxId - 1].no = false;
      newBoxes[boxId - 1].executed = true;

      if (boxId < 3) {
        newBoxes[boxId].pointerEvents = "unset";
        newBoxes[boxId].opacity = 1;
      }
    } else if (checkboxType === "no") {
      newBoxes[boxId - 1].yes = false;
      newBoxes[boxId - 1].no = true;
      newBoxes[boxId - 1].executed = false;
    }

    setBoxes(newBoxes);
  };

  const [openTooltip, setOpenTooltip] = useState(false);
  return (
    <div>
      {boxes.map((box, index) => (
        <div
          key={box.id}
          style={{ pointerEvents: box.pointerEvents, opacity: box.opacity }}
        >
          {/* TITLE */}
          <div
            onMouseEnter={() => setOpenTooltip(true)}
            onMouseLeave={() => setOpenTooltip(false)}
          >
            <div>
              <h4>Clean or replace the air filter</h4>

              {/* INFO ICON */}
              <div>
                <img src={info_icon} alt="info-icon" />
                <div style={{ display: openTooltip ? "block" : "none" }}></div>
              </div>
            </div>

            {/* TOOLTIP CONTENT */}
            <div style={{ display: openTooltip ? "block" : "none" }}>
              {/* TEXT */}
              <div>
                <h3>
                  Explanations of how to perform this service procedure can be
                  written here.
                </h3>
              </div>

              {/* IMAGES */}
              <div>
                <img src={bike_img} alt="img" />
                <img src={bike_img} alt="img" />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor={`yes-${box.id}`}>Yes</label>
            <input
              type="checkbox"
              id={`yes-${box.id}`}
              checked={box.yes}
              onChange={() => handleCheckboxChange(box.id, "yes")}
            />
          </div>
          <div>
            <label htmlFor={`no-${box.id}`}>No</label>
            <input
              type="checkbox"
              id={`no-${box.id}`}
              checked={box.no}
              onChange={() => handleCheckboxChange(box.id, "no")}
            />
          </div>

          <div>
            <label htmlFor={`executed-${box.id}`}>Executed</label>
            <input
              type="checkbox"
              id={`executed-${box.id}`}
              checked={box.executed}
            />
          </div>

          {box.no && (
            <div>
              <label htmlFor={`input1-${box.id}`}>Input 1</label>
              <input type="text" id={`input1-${box.id}`} />
              <label htmlFor={`input2-${box.id}`}>Input 2</label>
              <input type="text" id={`input2-${box.id}`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
