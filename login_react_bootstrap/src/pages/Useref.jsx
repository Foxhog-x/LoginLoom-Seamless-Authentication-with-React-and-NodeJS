// import { useEffect, useRef, useState } from "react";

// export const Useref = () => {
//   const [count, SetCount] = useState(0);
//   const intervalRef = useRef(0);
//   const handleClick = () => {
//     SetCount(Date.now());

//     console.log(intervalRef, "intervalRef");
//   };
//   const handleStopClick = () => {
//     clearInterval(intervalRef.current);
//   };

//   useEffect(() => {});

//   return (
//     <div>
//       <h1>count {count}</h1>

//       <input type="text" placeholder="type here"></input>
//       <button style={{ width: "60px", height: "30px" }} onClick={handleClick}>
//         start Click
//       </button>
//       <button
//         style={{ width: "60px", height: "30px" }}
//         onClick={handleStopClick}
//       >
//         stop Click
//       </button>
//     </div>
//   );
// };
