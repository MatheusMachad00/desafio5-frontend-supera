export default function convertDate(stringDate) {
  const dateObject = new Date(stringDate);
  const day = dateObject.getDate().toString().padStart(2, '0');
  const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObject.getFullYear();

  return `${day}/${month}/${year}`;
}
