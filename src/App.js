import { useState } from "react";
const detailsArr = [
  { type: "text", placeholder: "first name", value: {} },
  { type: "text", placeholder: "last name", value: {} },
  { type: "text", placeholder: "age", value: {} },
];
const quatesArr = [
  {
    quote:
      "   My mom once told me that if u cant find something to live for at least find something to die for.",
    owner: "2PAC SHAKUR",
  },
  {
    quote:
      "It's a struggle for every black man , we all know our selves only God can judge us.",
    owner: "Codesmann",
  },
  { quote: "Is it a crime to fight for what is mine.", owner: "Adams" },
  {
    quote:
      "If you want to be successful believe in your self and after do something don't just seat thier like a bug of cement.",
    owner: "Mowzey Radio",
  },
  {
    quote:
      "Every day if you can you just look your self in the mirror and say that I am special, I am a winner, I am not a quitter, am going to defeat everybody and always believe in your self.",
    owner: "Mowzey Radio",
  },
  {
    quote:
      "If shoot to kill is the order from above then this has to end is the order from the lower people.",
    owner: "Jim Nola",
  },
  {
    quote: "Facebook was not the first thing i built.",
    owner: "Mac Zukk Bugger",
  },
  { quote: "Let God judge the criminals.", owner: "Munir." },
  { quote: "Reality is wrong dreams are for real.", owner: "2Pac Shakur" },
];
export default function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [age, setAge] = useState();

  let [gen, setGen] = useState([]);

  const [log, setLog] = useState(1);
  function increaseLog() {
    if (!first) return alert("Please fill in the inputs");
    if (log < 5) setLog((s) => s + 1);
  }
  function decreaseLog() {
    if (log > 1) setLog((s) => s - 1);
  }

  return (
    <div className="main-body">
      <Steps onLog={log} />
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
      <GenerationRandomQuate
        onLogGen={log}
        onAge={age}
        onLast={last}
        hundleGEN={gen}
        hundleSetGEN={setGen}
      />
      <BtnCell
        onLog={log}
        onIncreaseLog={increaseLog}
        onDecreaseLog={decreaseLog}
      />

      <FinalResults
        onLast={last}
        onAge={age}
        onFirst={first}
        hundleGEN={gen}
        onLog={log}
      />
    </div>
  );
}

function Steps({ onLog }) {
  return (
    <div className="steps-cell">
      <div className="steps">
        <p className="checked">Start</p>
        <p className="lev">Start</p>
        <p className={onLog >= 2 ? "checked" : "step"}>
          {onLog >= 2 ? "Tic" : "Ex"}
        </p>
        {onLog >= 2 && <p className="lev2">Step{onLog >= 2 ? "1" : ""}</p>}
        <p className={onLog >= 3 ? "checked" : "step"}>
          {onLog >= 3 ? "Tic" : "Ex"}
        </p>
        {onLog >= 3 && <p className="lev3">Step{onLog >= 3 ? "2" : ""}</p>}

        <p className={onLog >= 4 ? "checked" : "step"}>
          {onLog >= 4 ? "Tic" : "Ex"}
        </p>
        {onLog >= 4 && <p className="lev4">Step{onLog >= 4 ? "3" : ""}</p>}

        <p className={onLog >= 5 ? "checked" : "step"}>
          {onLog >= 5 ? "Finished" : "Ex"}
        </p>
        {onLog >= 5 && <p className="lev5">Finished</p>}

        <span className="defBar"></span>
        {onLog > 1 && (
          <span
            className={`${onLog >= 2 ? "accBar" : ""} ${
              onLog >= 3 ? "step3" : ""
            } ${onLog >= 4 ? "step4" : ""} ${onLog >= 5 ? "step5" : ""}`}
          ></span>
        )}
      </div>
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
    <div className="input-element">
      <div className={onDisLog === 1 ? "show-form" : "hide-form"}>
        <label>First name</label>
        <input
          type={data[0].type}
          value={onFirst}
          onChange={(e) => onSetFirst(e.target.value)}
        />
      </div>
      <div className={onDisLog === 2 ? "show-form" : "hide-form"}>
        <label>Last name</label>
        <input
          type={data[1].type}
          value={onLast}
          onChange={(e) => onSetLast(e.target.value)}
        />
      </div>
      <div className={onDisLog === 3 ? "show-form" : "hide-form"}>
        <label>Age</label>
        <input
          type={+data[2].type}
          value={onAge}
          onChange={(e) => onSetAge(e.target.value)}
        />
      </div>
    </div>
  );
}
function GenerationRandomQuate({
  onLogGen,
  onAge,
  onLast,
  hundleGEN,
  hundleSetGEN,
}) {
  function genFunc(arr) {
    if (onAge && onLast)
      hundleSetGEN(
        () => (hundleGEN = arr[Math.floor(Math.random() * arr.length)])
      );
    else
      alert(
        "To generate a random quote first fill in all the inputs for a clear outcome of your details!!"
      );
  }
  return (
    <div className={onLogGen === 4 ? "show-form4" : "hide-form"}>
      <p>{hundleGEN.quote}</p>
      <h1>{hundleGEN.owner}</h1>
      <button className="btn-quote" onClick={() => genFunc(quatesArr)}>
        choose quote
      </button>
    </div>
  );
}
function BtnCell({ onDecreaseLog, onIncreaseLog, onLog }) {
  return (
    <div className="btn-cell">
      <button onClick={onDecreaseLog}> &larr;</button>

      <button onClick={onIncreaseLog}> &rarr;</button>
    </div>
  );
}
function FinalResults({ onFirst, onLast, onAge, hundleGEN, onLog }) {
  return (
    <div className={onLog > 4 ? "show-info" : "hide-form"}>
      <p>Your first name is {onFirst}.</p>
      <p>Your last name is {onLast}.</p>
      <p>You are {onAge} years old.</p>
      <div>
        <h3>Your favorite quote is;</h3>
        <p>{hundleGEN.quote}</p>
        <p>{hundleGEN.owner}</p>
      </div>
    </div>
  );
}
