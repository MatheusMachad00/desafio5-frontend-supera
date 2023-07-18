import { Header, TableStyle } from "./BankStatementStyle";
import convertDate from "../../utils/convertDate";

export default function BankStatement({ data, balance }) {
  return (
    <main>
      <Header>
        <h1>Saldo total: R$ {balance.toFixed(2)}</h1>
        <h1>Saldo no período: R$ {balance.toFixed(2)}</h1>
      </Header>

      <TableStyle>
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Nome do operador transacionado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{convertDate(item.date)}</td>
              <td>R$ {item.value}</td>
              <td>{item.operationType}</td>
              <td>{item.operatorName}</td>
            </tr>
          ))}
        </tbody>
      </TableStyle>
    </main>
  );
}
