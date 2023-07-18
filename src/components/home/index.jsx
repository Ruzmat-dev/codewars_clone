import React, { useState, useEffect } from "react";
import "./style.scss";
import { useParams, useNavigate } from "react-router-dom";
import instance from "../../api/instance";
import Card from "../../UI/Card";

const Home = () => {
  const [dota, setData] = useState([]);
  const [question, setQuestion] = useState();

  const userData = useParams();

  const goback = useNavigate();

  // const fetchUserData = () => {

  // };
  const name = dota.username;

  // const getExsampls = (e) => {

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
    // .catch((error) => console.log(error));
    // console.log(question);
  }, [name]);
  // console.log(question);

  // const getQuestion = (e) => {
  //   e.preventDefault();
  //   console.log();
  // }
  //  setTimeout(() => {

  //  }, 1000);
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     getExsampls()
  //   }, 1000);
  //   console.log(1)
  // }, []);

  // (() => {
  //   getExsampls()
  // }, 1000);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__wrapper">
          <button className="logout" onClick={() => goback("/")}>
            Logout
          </button>
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
                <span>{dota.honor}</span>
              </span>

              <p className="kyu__name">
                {" "}
                Name: <span>{dota.name}</span>{" "}
              </p>
            </div>

            <p className="kyu__user">
              Total Completed Kata:{" "}
              <span>{dota.codeChallenges?.totalCompleted}</span>
            </p>
          </div>
          <div className="home__card">
            <div className="home__card-btn">Solution list</div>
            <div className="home__card-info">
              {/* <div className="home__card-info-fuctionOne">
                <p>Calculating with Functions</p>
                <span>Completed languages: {dota.skills} </span>
                </div>
                <div className="home__card-info-fuctionTwo">
                <p>Calculating with Functions</p>
                <span>Completed languages: {dota.skills} </span>
                </div> */}
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
