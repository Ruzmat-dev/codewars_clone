// import React , {useState , useEffect} from 'react'


// const User = () => {

//   // Примечание: пустой массив зависимостей [] означает, что
//   // этот useEffect будет запущен один раз
//   // аналогично componentDidMount()

//   const Malikam = () => {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);
  
//     useEffect(() => {
//         fetch("https://www.codewars.com/api/v1/users/Xajiakbar")
//           .then(res => res.json())
//           .then(
//             (result) => {
//               setIsLoaded(true);
//               setItems(result);
//             },
//             // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
//             // чтобы не перехватывать исключения из ошибок в самих компонентах.
//             (error) => {
//               setIsLoaded(true);
//               setError(error);
//             }
//           )
//       }, [])
    
//       if (error) {
//         return <div>Ошибка: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Загрузка...</div>;
//       } else {
//         return (
//           <ul>
//            salom
//           </ul>
//         );
//       }
//   }


//   return (
//     <button onClick={Malikam}>maga bas</button>
//     )
// }


// export default User
// import React from "react";
// import ReactDOM from "react-dom";

// //  class OnSecondPageButton extends React.Component {
//     onclick () {
//       window.location.assign('http://localhost:5173/user/');
//     }

//     render() {
//       return (<a onClick={(e) => this.onclick(e)}><i className="fas fa-chart-bar"></i></a>);
//     }
// //   }
// export default Statistics_button;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Mam =  () => {

//     const navigate = useNavigate()

//     return (
//         <button onClick={()=> navigate(`home`)}>sam</button>
//     )
    
// }  

// export default Mam