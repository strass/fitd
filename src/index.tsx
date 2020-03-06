import React, { FunctionComponent, useState } from "react";
import ReactDOM from "react-dom";
// import * as serviceWorker from "./serviceWorker";
import toNumber from "lodash/toNumber";

type D6 = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const App: FunctionComponent = () => {
  const [rolls, setRolls] = useState<number[][]>([]);
  const [dice, setDice] = useState<D6>(0);
  const roll: React.DOMAttributes<HTMLFormElement>["onSubmit"] = e => {
    e.preventDefault();
    
  };
  return (
    <div>
      <ul>
        {rolls.map((dice, idx) => (
          <li key={idx}>
            {dice.map((d, idx) => (
              <span key={idx}>{d}</span>
            ))}
          </li>
        ))}
      </ul>
      <form onSubmit={roll}>
        <select
          name="numDice"
          onChange={e => {
            e.preventDefault();
            setDice(toNumber(e.target.value) as D6);
          }}
        >
          {[0, 1, 2, 3, 4, 5, 6].map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <button type="submit">Roll</button>
      </form>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
