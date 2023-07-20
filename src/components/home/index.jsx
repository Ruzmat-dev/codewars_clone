import React, { useState, useEffect } from "react";
import "./style.scss";
import { useParams, useNavigate } from "react-router-dom";
import Card from "../../UI/Card";

const Home = () => {
  const [dota, setData] = useState([]);
  const [question, setQuestion] = useState();

  const userData = useParams();

  const goback = useNavigate();

  const name = dota.username;


  useEffect(() => {
    fetch(`https://www.codewars.com/api/v1/users/${userData.id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://www.codewars.com/api/v1/users/${name}/code-challenges/completed?page=0`
    )
      .then((res) => res.json())
      .then((data) => setQuestion(data));
  }, [name]);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__wrapper">
          <div className="kyu">
            <div className="kyu__name-wrapper">
              <span className="kyu__dflex">
                <span className="kyu__wrapper">
                  <div className="kyu__wrapper-leval ">
                    {" "}
                    <span className="userss">
                      <span></span> {dota.ranks?.overall?.name}
                    </span>
                  </div>
                  <div className="kyu__wrapper-name">{dota.username}</div>
                </span>
                <span className="kyu__honor">{dota.honor}</span>
              </span>

              <p className="kyu__name">
                {" "}
                Name: <span>{dota.name ? dota.name : "Mavjud emas"}</span>{" "}
              </p>
            </div>

            <p className="kyu__user">
              Total Completed Kata:{" "}
              <span>{dota.codeChallenges?.totalCompleted}</span>
            </p>
          </div>
          <div className="home__card">
            <span>

            <button className="home__card-btn">Solution list</button>
            <button className="logout" onClick={() => goback("/")}>
              Logout
            </button>
            </span>
            <div className="home__card-info">
              <div className="scroll">
                {question?.data.map((el) => {
                  return <Card data={el} key={el.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
