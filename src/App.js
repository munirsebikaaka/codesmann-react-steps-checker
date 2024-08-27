import { useState } from "react";
export default function App() {
  return (
    <div>
      <RegstrationCell />
    </div>
  );
}

function RegstrationCell() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [district, setDistrict] = useState("");
  // const [country, setCountry] = useState("codesmann");

  const detailsArr = [
    [{ type: "text", placeholder: "first name", value: { first } }],
    [{ type: "text", placeholder: "last name", value: { last } }],
    [{ type: "text", placeholder: "district", value: { district } }],
    ["Uganda", "United States", "United Kingdom"],
  ];
  return (
    <div>
      {detailsArr[0].map((obj) => (
        <input
          type={obj.type}
          placeholder={obj.placeholder}
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
      ))}
      {detailsArr[1].map((obj) => (
        <input
          type={obj.type}
          placeholder={obj.placeholder}
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
      ))}
      {detailsArr[2].map((obj) => (
        <input
          type={obj.type}
          placeholder={obj.placeholder}
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      ))}
      <select>
        {detailsArr[3].map((co) => (
          <option>{co}</option>
        ))}
      </select>
    </div>
  );
}
