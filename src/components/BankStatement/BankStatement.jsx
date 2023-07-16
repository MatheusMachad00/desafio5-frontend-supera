import { Header, TableStyle } from "./BankStatementStyle";

export default function BankStatement({ data }) {
  return (
    <main>
      <Header>
        <h1>Saldo total: R$ 50,00</h1>
        <h1>Saldo no período: R$ 50,00</h1>
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
              <td>{item.dados}</td>
              <td>R$ {item.valencia}</td>
              <td>{item.tipo}</td>
              <td>{item.nomeOperador}</td>
            </tr>
          ))}
        </tbody>
      </TableStyle>
    </main>
  );
}
