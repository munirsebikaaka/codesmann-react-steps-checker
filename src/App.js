import { useState } from "react";
const detailsArr = [
  { type: "text", placeholder: "first name", value: {} },
  { type: "text", placeholder: "last name", value: {} },
  { type: "text", placeholder: "age", value: {} },
];
const quatesArr = [
  { quote: "bbbbbb", owner: "moxtech" },
  { quote: "ccccc", owner: "rex" },
  { quote: "ddddd", owner: "adams" },
];
export default function App() {
  const [log, setLog] = useState(1);
  function increaseLog() {
    if (log < 4) setLog((s) => s + 1);
  }
  function decreaseLog() {
    if (log > 1) setLog((s) => s - 1);
  }

  return (
    <div>
      <Steps
        onLog={log}
        onIncreaseLog={increaseLog}
        onDecreaseLog={decreaseLog}
      />
      <RegstrationCell data={detailsArr} onDisLog={log} />
      <GenerationRandomQuate onLogGen={log} />
    </div>
  );
}

function Steps({ onLog, onIncreaseLog, onDecreaseLog }) {
  return (
    <div>
      <div className="steps">
        <p className="checked">tic</p>
        <p className={onLog >= 2 ? "checked" : ""}>
          {onLog >= 2 ? "tic" : "ex"}
        </p>
        <p className={onLog >= 3 ? "checked" : ""}>
          {onLog >= 3 ? "tic" : "ex"}
        </p>
        <p className={onLog >= 4 ? "checked" : ""}>
          {onLog >= 4 ? "tic" : "ex"}
        </p>
        {/* <span className="defBar"></span> */}
      </div>
      <button onClick={onDecreaseLog}>SUBTRACT</button>
      <button onClick={onIncreaseLog}>ADD</button>
    </div>
  );
}

function RegstrationCell({ data, onDisLog }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [district, setDistrict] = useState("");

  return (
    <div>
      <input
        className={onDisLog === 1 ? "show-form" : "hide-form"}
        type={data[0].type}
        placeholder={data[0].placeholder}
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />

      <input
        className={onDisLog === 2 ? "show-form" : "hide-form"}
        type={data[1].type}
        placeholder={data[1].placeholder}
        value={last}
        onChange={(e) => setLast(e.target.value)}
      />

      <input
        className={onDisLog === 3 ? "show-form" : "hide-form"}
        type={data[2].type}
        placeholder={data[2].placeholder}
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
      />
    </div>
  );
}
function GenerationRandomQuate({ onLogGen }) {
  let gen;
  gen = quatesArr[Math.floor(Math.random() * quatesArr.length)];
  console.log(gen);

  function hundleDefualt(e) {
    e.preventDefault();
  }

  return (
    <form
      className={onLogGen === 4 ? "show-form" : "hide-form"}
      onSubmit={hundleDefualt}
    >
      <p>{gen.quote}</p>
      <h1>{gen.owner}</h1>
      <button>codesmann</button>
    </form>
  );
}
