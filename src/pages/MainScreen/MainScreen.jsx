import DateSearchBar from "../../components/DateSearchBar/DateSearchBar";
import NameSearchBar from "../../components/NameSearchBar/NameSearchBar";
import { Top, SearchButton, Main } from "./MainScreenStyle";

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
    </Main>
  );
}
