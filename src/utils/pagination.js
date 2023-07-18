import React, { useState } from "react";
import BankStatement from "../components/BankStatement/BankStatement";
import joinTables from "./joinTables";

export default function Pagination({ data, itemsPerPage, transactionData, userData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const apidata = joinTables(userData, transactionData);
  console.log(apidata[0]); 


  /* lembrar que você deve ver as transações apenas de 1 usuário por vez!!!! 
    MODIFICAR AS LINHAS: 21, 25 e 33 para colocar qual usuário deve ser exibido de forma dinamica! */



  const totalPages = Math.ceil(apidata[0].transactions.length / itemsPerPage); 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = apidata[0].transactions.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <BankStatement data={currentItems} balance={apidata[0].balance}/> 
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
