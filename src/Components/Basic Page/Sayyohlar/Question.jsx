import React, { useState } from "react";
import "./Sayyoh.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info, icon, img }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question">
      <header>
        <div style={{ display: "flex" }}>
          <h4 onClick={() => setExpanded(!expanded)} className="question-title">
            <span style={{ color: "#DD2C00", fontSize: "30px" }}> {icon}</span>{" "}
            {title}
          </h4>
          <button className="btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        <hr />
      </header>
      {expanded && (
        <div style={{ display: "flex" }}>
          <p style={{ alignItems: "justify" }}>{info}</p>
          <img
            src={img}
            alt=""
            style={{ width: 400, marginBottom: 53, borderRadius: 15 }}
          />
        </div>
      )}
    </article>
  );
};

export default Question;
