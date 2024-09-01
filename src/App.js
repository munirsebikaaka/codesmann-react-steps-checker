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
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [age, setAge] = useState("");

  const [log, setLog] = useState(1);
  function increaseLog() {
    if (log < 4 && first) setLog((s) => s + 1);
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
      <RegstrationCell
        data={detailsArr}
        onDisLog={log}
        onFirst={first}
        onSetFirst={setFirst}
        onLast={last}
        onSetLast={setLast}
        onAge={age}
        onSetAge={setAge}
      />
      <GenerationRandomQuate onLogGen={log} onAge={age} onLast={last} />
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
      <button onClick={onDecreaseLog}>LEFT</button>
      <button onClick={onIncreaseLog}>RIGHT</button>
    </div>
  );
}

function RegstrationCell({
  data,
  onDisLog,
  onFirst,
  onSetFirst,
  onLast,
  onSetLast,
  onAge,
  onSetAge,
}) {
  return (
    <div>
      <input
        className={onDisLog === 1 ? "show-form" : "hide-form"}
        type={data[0].type}
        placeholder={data[0].placeholder}
        value={onFirst}
        onChange={(e) => onSetFirst(e.target.value)}
      />

      <input
        className={onDisLog === 2 ? "show-form" : "hide-form"}
        type={data[1].type}
        placeholder={data[1].placeholder}
        value={onLast}
        onChange={(e) => onSetLast(e.target.value)}
      />

      <input
        className={onDisLog === 3 ? "show-form" : "hide-form"}
        type={data[2].type}
        placeholder={data[2].placeholder}
        value={onAge}
        onChange={(e) => onSetAge(e.target.value)}
      />
    </div>
  );
}
function GenerationRandomQuate({ onLogGen, onAge, onLast }) {
  let [gen, setGen] = useState([]);
  function genFunc(arr) {
    if (onAge && onLast)
      setGen(() => (gen = arr[Math.floor(Math.random() * arr.length)]));
    else
      alert(
        "Please fill in all the inputs for a clear outcome of your details!!"
      );
  }
  return (
    <div className={onLogGen === 4 ? "show-form" : "hide-form"}>
      <p>{gen.quote}</p>
      <h1>{gen.owner}</h1>
      <button onClick={() => genFunc(quatesArr)}>GENERATE</button>
    </div>
  );
}
