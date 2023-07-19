import DateSearchBar from "../../components/DateSearchBar/DateSearchBar";
import NameSearchBar from "../../components/NameSearchBar/NameSearchBar";
import Pagination from "../../utils/pagination";
import UserMenu from "../../components/UserMenu/UserMenu";
import { Top, SearchButton, Main, TableComponent } from "./MainScreenStyle";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MainScreen() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");
  const [transactionData, setTransactionData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [activeUser, setActiveUser] = useState(0);

  useEffect(() => {
    const LINK_API = "http://localhost:8080/transaction/findAll";
    const request = axios.get(LINK_API);
    request.then((response) => {
      const { data } = response;
      setTransactionData(data);
    });
    request.catch((err) => {
      console.log(err.response);
    });

    const LINK2_API = "http://localhost:8080/user";
    const request2 = axios.get(LINK2_API);
    request2.then((response) => {
      const { data } = response;
      setUserData(data);
    });
    request.catch((err) => {
      console.log(err.response);
    });
  }, []);

  return (
    <Main>
      {userData === null && <h1>carregando....</h1>}
      {userData !== null && (
        <UserMenu
          userData={userData}
          activeUser={activeUser}
          setActiveUser={setActiveUser}
        ></UserMenu>
      )}

      <Top>
        <DateSearchBar
          prop={"início"}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        ></DateSearchBar>
        <DateSearchBar
          prop={"fim"}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        ></DateSearchBar>
        <NameSearchBar setName={setName}></NameSearchBar>
      </Top>
      <SearchButton>
        <button
          onClick={() => {
            console.log("teste");
          }}
        >
          Pesquisar
        </button>
      </SearchButton>
      <TableComponent>
        {transactionData && userData === null && <h1>carregando....</h1>}
        {transactionData && userData !== null && (
          <Pagination
            itemsPerPage={4}
            transactionData={transactionData}
            userData={userData}
            activeUser={activeUser}
          ></Pagination>
        )}
      </TableComponent>
    </Main>
  );
}
