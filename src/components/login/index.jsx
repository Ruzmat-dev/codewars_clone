import React, { useEffect, useState } from "react";
import "./style.scss";
import instance from "../../api/instance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [state, setState] = useState("");

  const navigate = useNavigate();



  const getUser = (e) => {
    setState(e.target.value);

  };

  const Hendl = (e) => {
    console.log(state);
    e.preventDefault()
    instance
    .get(`/users/${state}`)
    .then((response) => setSearchResult(response.data))
    .cath((err) => console.log(err));    

    console.log(searchResult);
    // searchResult.length < 0 ? alert("Please")  : confirm("siz haqiqatan ham kirmoqchi misiz?")
  }

    console.log(searchResult);

  const Marg = (e) => {
    e.preventDefault();
    alert(" Iltimos kami 3ta soz yozig");
  };
  return (
    <div className="login">
      <form className="login__wrapper">
        <span>
          <div className="login__wrapper-logo"></div>
          <p className="login__wrapper-text">codewars</p>
        </span>
        <div className="login__wrapper-rectangle"></div>
        <input
          min="2"
          value={state}
          onInput={(event) => getUser(event)}
          type="text"
          placeholder="codewars user name"
        />

        {state.length > 2 ? (
          <span className="login__wrapper-btn" onClick={() => navigate(`/home/${searchResult.id}`)}>
            <button className="login__wrapper-btn" onClick={Hendl}>
            Kirish
          </button>    
         </span>
        ) : (
          <button className="login__wrapper-defoult" defaultValue onClick={Marg}>Kirish</button>
        )}
      </form>
    </div>
  );
};

export default Login;
