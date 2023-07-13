import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../api/instance";
// import { render } from "react-dom";

const Men = () => {
  //   const[ loading , setLoading] = useState(true);
  const [state, setState] = useState({ loading: true, statusCode: null });
  const [user, setUser] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate();

  const getUser = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  // console.log(user);

  const Open = (e) => {
    e.preventDefault();
  
    // e.preventDefault();
    if( user.length > 2){
      fetch(`https://www.codewars.com/api/v1/users/${user}`)
      .then((response) => {
        setState({ loading: false, statusCode: response.status });
      })
      // .then(res => console.log(res.data))
      .catch((error) => {
        console.error(error);
        setState({ loading: false });
      });

    instance
      .get(`/users/${user}`)
      .then((response) => setSearchResult(response.data));

    console.log(searchResult);
    if (state.loading) {
      console.log("Loading...");
    }

    if (!state.loading && !state.statusCode) {
      return <p>Something went wrong. See console logging.</p>;
    }

    // ответ получен, статус 200
    if (state.statusCode === 200) {
      // return (<p>All good</p>);
      navigate(`/home/${searchResult.id}`);
      console.log("all good");
    }

    // ответ получен, статус 404
    if (state.statusCode === 404) {
      alert("Uzir bunaqa foydalanuvchi mavjud emas");
    }
    
    // console.log(searchResult);
    } else {
      alert("Uzir bunaqa foydalan ")
    }
  };
  return (
    <>
      {/* <input type="text" value={user} onInput={(e) => getUser(e)} /> */}
      {/* <p>
        Unexpected status code:
        <button onClick={Nega}>123</button>
      </p> */}
      <div className="login">
        <form className="login__wrapper">
          <span>
            <div className="login__wrapper-logo"></div>
            <p className="login__wrapper-text">codewars</p>
          </span>
          <div  className="login__wrapper-rectangle"></div>
          <input
            min="2"
            value={user}
            onInput={(event) => getUser(event)}
            type="text"
            placeholder="codewars user name"
          />

          <button className="login__wrapper-btn" onClick={Open}>Kirish
          </button>
        </form>
      </div>
    </>
  );
};
export default Men;
