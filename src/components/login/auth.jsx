// import React, { useEffect, useState } from "react";
// import "./style.scss";
// import instance from "../../api/instance";

// const Login = () => {
//   const [searchResult, setSearchResult] = useState([]);
//   const [state, setState] = useState("");

   

//   useEffect(() => {
//     setTimeout(() => {
//         alert("Bunaqa foydalunichi yuq")
//     }, 500);
//   } , [])

//   const getUser = (e) => {
//     setState(e.target.value);
//     instance
//       .get(`/users/${e.target.value}`)
//       .then((response) => setSearchResult(response.data))
//       .cath((err) => console.log(err));
//   };

//   const Marg = (e) => {
//     e.preventDefault();
//     alert("Iltimos kami 3ta soz yozig");
//   };
//   console.log(searchResult)
//   return (
//     <div className="login">
//       <form className="login__wrapper">
//         <span>
//           <div className="login__wrapper-logo"></div>
//           <p className="login__wrapper-text">codewars</p>
//         </span>
//         <div className="login__wrapper-rectangle"></div>
//         <input
//           min="2"
//           value={state}
//           onInput={(event) => getUser(event)}
//           type="text"
//           placeholder="codewars user name"
//         />

       
// {state.length > 2 ? (
//           <button className="login__wrapper-btn" onClick={() => navigate(`/home/${searchResult.id}`)}>
//             Kirish
//           </button>
//         ) : (
//           <button className="login__wrapper-defoult" defaultValue onClick={Marg}>Kirish</button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import instance from "../../api/instance";
// import { render } from "react-dom";

// const Component = () =>  {

//   const[ loading , setLoading] = useState(true);
// const [state , setState] = useState(false);

//   state = {
//       loading: true, // режим загрузки
//       statusCode: null, // статус ответа
//     }
//   }

  
//   fetch("https://www.codewars.com/api/v1/users/some_user")
//     .then((response) => {
//       this.setState({ loading: false, statusCode: response.status });
//     })
//     .catch((error) => {
//       console.error(error);
//       this.setState({ loading: false });
//     });

//     render() {
//        // ответ пока не получен - загрузка
//   if (this.state.loading) {
//     return (<p>Loading...</p>);
//   }

//   // ответ получен, но нет статуса ответа (смотри консоль)
//   if (!this.state.loading && !this.state.statusCode) {
//     return (<p>Something went wrong. See console logging.</p>);
//   }

//   // ответ получен, статус 200
//   if (this.state.statusCode === 200) {
//     return (<p>All good</p>);
//   }

//   // ответ получен, статус 404    
//   if (this.state.statusCode === 404) {
//     return (<p>Not found</p>);
//   }

//   // ответ получен, остальные статусы
//   return (<p>Unexpected status code: {this.state.statusCode}</p>);
//     }
// }

// export default Component;



import React , {Component , useEffect, useState} from 'react'


const Ccomponent = () => { 
  

  const [state, setState] = useState(
    {
      error: null,
      isLoaded:false,
      items: []
    }
  );

   const Mer = () => {
    
    fetch(`https://www.codewars.com/api/v1/users/Ruzmat`)
    .then(res => res.json())
    .then(
      (result) => {
        setState({
          isLoaded: true,
          items: result.data 
        });
      },
      (error) => {
        setState({
          isLoaded: true ,
          error
        })
      }
    )


    const {error , isLoaded , items} = state ;

console.log(items);

    if (error) {
      return <p> Error {error.message}</p>
    } else if (!isLoaded) {
      return <p>Loading...</p>
    }   
   }

      return (
        <>
          {/* <h1>{items}</h1> */}
          <button onClick={Mer}>123</button>
        </>
      )
    

  
}


export default Ccomponent