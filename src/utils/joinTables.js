export default function joinTables(userData, transactionData) {
  const transactionsByPerson = transactionData.reduce((acc, transaction) => {
    const { accountID } = transaction;
    acc[accountID] = [...(acc[accountID] || []), transaction];
    return acc;
  }, {});

  return userData.map(person => {
    const { id } = person;
    const updatedPerson = { ...person };
    updatedPerson.transactions = transactionsByPerson[id] || [];
    updatedPerson.transactions.forEach(({ operationType, value }) => {
      switch (operationType) {
        case "deposit":
        case "incomingTransfer":
          updatedPerson.balance += value;
          break;
        case "withdraw":
        case "outgoingTransfer":
          updatedPerson.balance -= value;
          break;
        default:
          console.error(`Unknown operationType: ${operationType}`);
      }
    });
    return updatedPerson;
  });
};
