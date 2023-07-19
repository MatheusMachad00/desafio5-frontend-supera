import { InputStyle } from "./NameSearchBarStyle";

export default function NameSearchBar({ setUsername }) {
  return (
    <InputStyle>
      <h1>Nome do operador transacionado</h1>
      <input type="text" onChange={(e) => setUsername(e.target.value)}></input>
    </InputStyle>
  );
}
