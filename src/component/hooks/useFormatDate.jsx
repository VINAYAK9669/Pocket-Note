// Function to format the date as "date month year"
const FormatDate = (date) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  console.log(options);
  const formattedDate = date.toLocaleDateString("en-US", options);
  // Splitting and rearranging the parts to match the desired format "11 May 2024"
  const parts = formattedDate.split(" ");
  console.log(parts[0]);
  return `${parts[1].replace(",", "")} ${parts[0]}  ${parts[2]}`;
};

export default FormatDate;
