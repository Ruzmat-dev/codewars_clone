import React, { useEffect, useState } from "react";
import "./style.scss";
import instance from "../../api/instance";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [searchResult, setSearchResult] = useState({
    loading: true,
    data: [],
    statusCode: null,
  });
  const [state, setState] = useState("");

  const navigate = useNavigate();

  const getUser = (e) => {
    setState(e.target.value);
  };

  const Hendl = (e) => {
    e.preventDefault();
    instance
      .get(`/users/${state}`)
      .then((response) =>
        setSearchResult({
          loading: false,
          data: response.data,
          statusCode: response.status,
        })
      )
      .cath((err) => {
        console.log(err);
        setSearchResult({ loading: true });
      });
  };

  if (searchResult.statusCode === 200) {
    toast.success("login successfully", {
      position: "top-right",
      autoClose: 300,
    });
    setTimeout(() => {
      navigate(`/home/${searchResult.data.id}`);
    }, 1500);
  }

  const Marg = (e) => {
    e.preventDefault();
    toast.error("Sorry, no such user exists", {
      position: "top-right",
      autoClose: 500,
    });
  };
  return (
    <div className="login">
      <ToastContainer />
      <form className="login__wrapper">
        <span>
          <div className="login__wrapper-logo"></div>
          <p className="login__wrapper-text">codewars</p>
        </span>
        <div className="login__wrapper-rectangle"></div>
        <input
          min="2"
          value={state}
          onInput={(e) => getUser(e)}
          type="text"
          placeholder="codewars user name"
        />
        {state.length > 2 ? (
          <button className="login__wrapper-btn" onClick={Hendl}>
            Kirish
          </button>
        ) : (
          <button className="login__wrapper-btn" onClick={Marg}>
            Kirish
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
