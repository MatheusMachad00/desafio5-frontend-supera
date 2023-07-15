import { useState } from "react";
import { InputStyle } from "./DateSearchBarStyle";

export default function DateSearchBar({ prop }) {
  const [date, setdate] = useState("");
  /* console.log(date); */
  return (
    <InputStyle>
      <h1>Data de {prop}</h1>
      <input type="date" onChange={(e) => setdate(e.target.value)}></input>
    </InputStyle>
  );
}
