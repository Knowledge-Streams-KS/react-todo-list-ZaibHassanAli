import { useState } from "react";

const Searching = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data] = useState([
    "Zaib",
    "Hassan",
    "Ali",
    "Aoun",
    "Zain",
    "Ali",
    "Asjad",
    "Hamza",
    "Araiz",
  ]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Searching;
