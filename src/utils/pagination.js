import React, { useState } from "react";
import BankStatement from "../components/BankStatement/BankStatement";
import joinTables from "./joinTables";

export default function Pagination({ data, itemsPerPage, transactionData, userData, activeUser }) {
  const [currentPage, setCurrentPage] = useState(1);
  const apidata = joinTables(userData, transactionData);
  const totalPages = Math.ceil(apidata[activeUser].transactions.length / itemsPerPage); 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = apidata[activeUser].transactions.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <BankStatement data={currentItems} balance={apidata[activeUser].balance}/> 
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
