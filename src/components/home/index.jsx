import React, { useState, useEffect } from "react";
import "./style.scss";
import { useParams , useNavigate } from "react-router-dom";

const Home = () => {
  const [dota, setData] = useState([]);

  const userData = useParams();
  
  const goback  = useNavigate();


  const fetchUserData = () => {
    fetch(`https://www.codewars.com/api/v1/users/${userData.id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__wrapper">
          <button className="logout" onClick={() => goback("/")}>Logout</button>
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

                <p className="kyu__name"> Name: <span>{dota.name}</span> </p>

            </div>

            <p className="kyu__user">
              Total Completed Kata: <span>{dota.ranks?.overall?.score}</span>
            </p>
          </div>
          <div className="home__card">
            <div className="home__card-btn">Solution list</div>
            <div className="home__card-info">
                <div className="home__card-info-fuctionOne">
                <p>Calculating with Functions</p>
                <span>Completed languages: {dota.skills} </span>
                </div>
                <div className="home__card-info-fuctionTwo">
                <p>Calculating with Functions</p>
                <span>Completed languages: {dota.skills} </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
