import { useState } from "react";
const detailsArr = [
  { type: "text", placeholder: "first name", value: {} },
  { type: "text", placeholder: "last name", value: {} },
  { type: "text", placeholder: "district", value: {} },
  [
    { count: "Uganda", id: Date.now() },
    { count: "United States", id: Date.now() },
    { count: "United Kingdom", id: Date.now() },
  ],
];
const quatesArr = [
  { quote: "bbbbbb", owner: "moxtech" },
  { quote: "ccccc", owner: "rex" },
  { quote: "ddddd", owner: "adams" },
];
export default function App() {
  let gen;
  gen = quatesArr[Math.round(Math.random() * quatesArr.length)];
  if (!gen) return;
  return (
    <div>
      <Steps />
      <RegstrationCell data={detailsArr} />
      <GenerationRandomQuate onGen={gen} />
    </div>
  );
}

function Steps() {
  return (
    <div className="steps">
      <p>tic</p>
      <p>x</p>
      <p>x</p>
      <p>x</p>
      <span className="defBar"></span>
    </div>
  );
}

function RegstrationCell({ data }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [district, setDistrict] = useState("");

  return (
    <div>
      <input
        type={data[0].type}
        placeholder={data[0].placeholder}
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />

      <input
        type={data[1].type}
        placeholder={data[1].placeholder}
        value={last}
        onChange={(e) => setLast(e.target.value)}
      />

      <input
        type={data[2].type}
        placeholder={data[2].placeholder}
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
      />

      <select>
        {data[3].map((co) => (
          <option>{co.count}</option>
        ))}
      </select>
    </div>
  );
}
function GenerationRandomQuate({ onGen }) {
  console.log(onGen);
  return (
    <div>
      <p>{onGen.quote}</p>
      <h1>{onGen.owner}</h1>
      <button>codesmann</button>
    </div>
  );
}
