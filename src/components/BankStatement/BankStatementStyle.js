import styled from "styled-components";

export const Header = styled.div`
  border-style: solid;
  border-width: 1px;
  display: flex;
  width: 75vw;

  h1{
    padding: 10px 100px 10px 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
  }
`;

export const TableStyle = styled.table`
  text-align: left;
  border-collapse: collapse;
  width: 100%;
  width: 75vw;
  margin-bottom: 10px;

  table, th, td{
    border: 1px solid black;
  }

  td{
    padding: 10px;
    font-family: "Roboto";
    font-style: normal;
  }

  th{
    padding: 10px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
  }
`;