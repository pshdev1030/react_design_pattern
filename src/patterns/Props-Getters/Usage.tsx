import { CounterContentWrapper } from "../../styles";
import { Counter } from "./Counter";
import { useCounter } from "./hooks/useCounter";

export default function PropsGetters({
  initialValue = 0,
}: {
  initialValue?: number;
}) {
  const { count, getCounterProps, getIncrementProps, getDecrementProps } =
    useCounter(initialValue);

  const handleBtn1Clicked = () => {
    console.log("btn 1 clicked");
  };

  const handleBtn2Clicked = () => {
    console.log("btn 2 clicked");
  };
  return (
    <div>
      <h1>Props Getters Pattern</h1>
      <div className={CounterContentWrapper}>
        <Counter {...getCounterProps()}>
          <Counter.Count />
          <Counter.Increment {...getIncrementProps()} />
          <Counter.Decrement {...getDecrementProps()} />
        </Counter>
      </div>
      <div>
        <button {...getIncrementProps({ onClick: handleBtn1Clicked })}>
          Custom increment btn 1
        </button>

        <button {...getDecrementProps({ onClick: handleBtn2Clicked })}>
          Custom decrement btn 2
        </button>
      </div>
    </div>
  );
}
