import { createContext } from "react";

export const InfoContext = createContext();

// useEffect(() => {
//   const fetchData = () => {
//     const buttons = document.querySelectorAll(".custom-button");
//     const data = Array.from(buttons).map((button) => ({
//       id: button.getAttribute("data-id"),
//       value: button.innerText.trim(),
//     }));
//     setBuildingData(data);
//   };

//   fetchData();
// }, []);

// const getPanelValue = (text) => {
//   if (!text) return []; // If no input, return empty array
//   const filteredOptions = buildingData.filter((option) =>
//     option.value.toLowerCase().includes(text.toLowerCase())
//   );
//   return filteredOptions.map((option) => ({
//     value: option.value,
//     id: option.id,
//   }));
// };

// const onChange = (data) => {
//   setValue(data);
// };

// const onSelect = (data) => {
//   console.log("onSelect", data);
// };
