import DateSearchBar from "../../components/DateSearchBar/DateSearchBar";
import NameSearchBar from "../../components/NameSearchBar/NameSearchBar";
import Pagination from "../../utils/pagination";
import { Top, SearchButton, Main, TableComponent } from "./MainScreenStyle";

const data = [
  {
    dados: "14/02/2019",
    valencia: "30895,46",
    tipo: "depósito",
    nomeOperador: "",
  },
  {
    dados: "12/04/2019",
    valencia: "12,46",
    tipo: "transferência Entrada",
    nomeOperador: "teste",
  },
  {
    dados: "12/04/2019",
    valencia: "12,46",
    tipo: "transferência Entrada",
    nomeOperador: "teste",
  },
  {
    dados: "12/04/2019",
    valencia: "12,46",
    tipo: "transferência Entrada",
    nomeOperador: "teste",
  },
  {
    dados: "12/04/2019",
    valencia: "12,46",
    tipo: "transferência Entrada",
    nomeOperador: "teste",
  },
];

export default function MainScreen() {
  return (
    <Main>
      <Top>
        <DateSearchBar prop={"início"}></DateSearchBar>
        <DateSearchBar prop={"fim"}></DateSearchBar>
        <NameSearchBar></NameSearchBar>
      </Top>
      <SearchButton>
        <button>Pesquisar</button>
      </SearchButton>
      <TableComponent>
        <Pagination data={data} itemsPerPage={4}></Pagination>
      </TableComponent>
    </Main>
  );
}
