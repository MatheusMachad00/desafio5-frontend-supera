import { InputStyle } from "./DateSearchBarStyle";

export default function DateSearchBar({ prop, setStartDate, setEndDate }) {
  return (
    <>
      {prop === "início" && (
        <InputStyle>
          <h1>Data de {prop}</h1>
          <input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
        </InputStyle>
      )}

      {prop === "fim" && (
        <InputStyle>
          <h1>Data de {prop}</h1>
          <input
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
        </InputStyle>
      )}
    </>
  );
}
