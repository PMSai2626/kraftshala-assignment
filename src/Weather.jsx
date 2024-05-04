// import { useState, useEffect } from "react";

// const apiKey = "ac0b0173571bdabe965a94bb0cc5892d";

// const Weather = () => {
//   const [weather, setWeather] = useState({
//     icon: "https://openweathermap.org/img/wn/10d@2x.png",
//     temp: "20",
//     city: "Paris",
//     humidity: "300",
//     speed: "20"
//   });

//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000); // Update every second

//     return () => clearInterval(intervalId); // Cleanup interval on unmount
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let city = event.target.city.value;

//     if (!city) {
//       alert("Please Provide City Name");
//       return;
//     }
    
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error();
//         }
//         return res.json();
//       })
//       .then(data => {
//         console.log("Weather data:", data);
//         setWeather({
//           icon: "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png",
//           temp: data.main.temp,
//           city: data.name,
//           humidity: data.main.humidity,
//           speed: data.wind.speed
//         });
//       })
//       .catch(error => {
//         alert("Unable to fetch the weather forecast");
//       });
//   };

//   return (
//     <>
//       <div className="container my-5">
//         <div className="mx-auto rounded border text-center text-white p-4" style={{ backgroundColor: "#3B5FAB" }}>
//           <h2 className="fw-bold mb-5 fs-1">Weather Forecast Application</h2>
//           <form className="d-flex" onSubmit={handleSubmit}>
//             <div>
//             <h1 className="fw-bold fs-3">Today date</h1>
//             <h4 className=" fs-3 ">{currentDateTime.toLocaleDateString()}</h4>
//             </div>
//             <input className="form-control me-3 w-50" style={{ marginLeft: "100px" }} placeholder="City" name="city" />
//             <button className="btn btn-outline-light w-30" type="submit">Search</button>
//             <div>      
//               <h1 className="fw-bold fs-3 ml-14 ">Today Time</h1>
//                     <h2 className=" fs-3 ml-14"> {currentDateTime.toLocaleTimeString()}</h2>
//             </div>

//           </form>
//           <img src={weather.icon} alt="image"  className="fs-3rem" style={{marginLeft: "540px", width:"150px" }} />
//           <h1 className="display-0.5 fw-bold fs-1">{weather.temp} °C</h1>
//           <h1 className="mb-5 fw-bold fs-1">{weather.city}</h1>
         
//           <div className="row mb-3">
//             <div className="col-6 fs-1 ">
//               <i className="bi bi-water text-white fs-1">{weather.humidity}</i><span className="fs-1"> Humidity</span><br />
//               40%
//             </div>
//             <div className="col-4 fs-1">
//               <i className="bi bi-wind text-white fs-1"></i>{weather.speed} <span className="fs-1"> Speed </span> <br />
//               23 km/h
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Weather;
