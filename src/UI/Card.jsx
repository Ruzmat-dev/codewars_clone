import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/home/style.scss";

const index = ({ data: { id, name, completedLanguages } }) => {
  return (
    <>
      <form key={id} className="card__question">
        <h3>{name ? name : "Misol yuq"}</h3>
        <span>
        <p>{completedLanguages}</p>
        <a href={`https://www.codewars.com/kata/${id}`}>TRAIN</a>
        </span>
      </form>
    </>
  );
};

export default index;
