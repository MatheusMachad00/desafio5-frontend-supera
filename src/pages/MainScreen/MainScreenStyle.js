import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 60px;
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: right;
  padding-right: 12.47vw;


  button {
    width: 100px;
    height: 40px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
  
}
`;

export const Main = styled.main`
  padding: 60px;
  display: flex;
  flex-direction: column;
`
