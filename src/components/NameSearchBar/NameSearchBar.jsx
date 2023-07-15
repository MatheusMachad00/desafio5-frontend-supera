import { useState } from "react";
import { InputStyle } from "./NameSearchBarStyle";

export default function NameSearchBar() {
  const [name, setName] = useState("");

  return (
    <InputStyle>
      <h1>Nome do operador transacionado</h1>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
    </InputStyle>
  );
}
