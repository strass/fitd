import React, { FunctionComponent, useState } from "react";
import toNumber from "lodash/toNumber";
import times from "lodash/times";
import sample from "lodash/sample";
import range from "lodash/range";
import { useCreateRollsMutation, useListRollsQuery } from "./generated/graphql";

type D6 = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const App: FunctionComponent = () => {
  // const subscription = useOnCreateRollsSubscription();
  // console.log(subscription);
  const { data } = useListRollsQuery({ pollInterval: 5000 });
  const [createRoll, { loading: mutationPending }] = useCreateRollsMutation();
  const [dice, setDice] = useState<D6>(0);
  const roll: React.DOMAttributes<HTMLFormElement>["onSubmit"] = async e => {
    e.preventDefault();
    try {
      const roll = times(dice, () => (sample(range(1, 6)) as unknown) as D6);
      const response = await createRoll({
        variables: {
          createrollsinput: {
            dice: roll,
            id: `${Math.random() * 100000}`,
            createdAt: Date.now()
          }
        }
      });
      console.log(response);
    } catch (ex) {
      console.error(ex);
    }
  };
  return (
    <div>
      <ul>
        {(data?.listRolls?.items ?? []).map(
          roll =>
            roll && (
              <li key={roll.id}>
                {roll.dice.map((d, idx) => (
                  <span key={idx}>{d}</span>
                ))}
              </li>
            )
        )}
      </ul>
      <form onSubmit={roll}>
        <fieldset disabled={mutationPending}>
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
        </fieldset>
      </form>
    </div>
  );
};

export default App;
