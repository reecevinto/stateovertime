import "./styles.css";

import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setTimeout(() => {
            alert(number);
          }, 3000);
          //alert(number);
        }}
      >
        +5
      </button>
    </>
  );
}
