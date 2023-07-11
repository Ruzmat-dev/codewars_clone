import React, { useEffect, useState } from "react";
import "./style.scss";
import instance from "../../api/instance";

const Login = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [state, setState] = useState("");

   

  useEffect(() => {
    setTimeout(() => {
        alert("Bunaqa foydalunichi yuq")
    }, 500);
  } , [])

  const getUser = (e) => {
    setState(e.target.value);
    instance
      .get(`/users/${e.target.value}`)
      .then((response) => setSearchResult(response.data))
      .cath((err) => console.log(err));
  };

  const Marg = (e) => {
    e.preventDefault();
    alert("Iltimos kami 3ta soz yozig");
  };
  console.log(searchResult)
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
          <button className="login__wrapper-btn" onClick={() => navigate(`/home/${searchResult.id}`)}>
            Kirish
          </button>
        ) : (
          <button className="login__wrapper-defoult" defaultValue onClick={Marg}>Kirish</button>
        )}
      </form>
    </div>
  );
};

export default Login;
